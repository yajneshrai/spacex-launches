import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchDataService {

  BASE_API = 'https://api.spaceXdata.com/v3/launches?limit=100';

  constructor(private http: HttpClient) { }

  /**
   * Makes a HTTP Get call to fetch records based on query passed.
   * Updates the API URL with the parameters passed in query.
   * @param query Map containing selected filter key-value pair
   */
  getLaunchData(query: any): Observable<any> {
    let queryString = '';
    for (const key of Object.keys(query)) {
      queryString +=  '&' + key + '=' + query[key];
    }

    return this.http.get(`${this.BASE_API}${queryString}`);
  }
}
