import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input() flight: any;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Returns the appropriate string value for status flag
   * @param status A flag with boolean or null value
   */
  getStatus(status: null | boolean): string {
    if (status === null) {
      return 'Not available';
    } else {
      return status ? 'True' : 'False';
    }
  }
}
