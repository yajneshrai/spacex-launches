import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  launchYears: string[] = [];

  filter: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {
    const currentYear = (new Date()).getFullYear();
    for (let year = 2006; year <= currentYear; year++) {
      this.launchYears.push(year.toString());
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      qparams => {
        this.filter = {...qparams};
      });
  }

  /**
   * Updates the filter section key-value map
   * @param key Key of the selected field
   * @param val Value of the selected field
   */
  updateQuery(key: string, val: string): void {
    if (this.filter[key] === val) {
      delete this.filter[key];
    } else {
      this.filter[key] = val;
    }
    this.updateUrl(this.filter);
  }

  /**
   * Update the URL with selected fiters
   * @param queryParams Map containing the key-value pair
   */
  updateUrl(queryParams: any): void {
    this.router.navigate(['/launches'], { queryParams });
  }

  /**
   * Clear the filter selection
   */
  clear(): void {
    this.filter = {};
    this.updateUrl(this.filter);
  }
}
