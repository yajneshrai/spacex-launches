import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchDataService } from 'src/app/services/launch-data.service';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-launch-results',
  templateUrl: './launch-results.component.html',
  styleUrls: ['./launch-results.component.css']
})
export class LaunchResultsComponent implements OnInit {

  data$: Observable<any>;
  launchRecords: any;
  isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private dataService: LaunchDataService
    ) { }

  ngOnInit(): void {
    // Using switchmap to consider only latest URL change
    this.route.queryParams.pipe(
      switchMap((qparams) =>  {
        this.isLoading = true;
        return this.dataService.getLaunchData(qparams);
      })
    ).subscribe(
        data => {
          this.launchRecords = data;
          this.isLoading = false;
      },
        error => {
          this.launchRecords = [];
          this.isLoading = false;
      });
  }
}
