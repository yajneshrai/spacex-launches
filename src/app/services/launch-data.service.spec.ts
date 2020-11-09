import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LaunchDataService } from './launch-data.service';
import { Observable, of } from 'rxjs';

describe('LaunchDataService', () => {
  let service: LaunchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(LaunchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


export class MockLaunchDataService extends LaunchDataService {
  getLaunchData(query: any): Observable<any> {
    return of([{
      links: '',
      mission_id: [],
      launch_year: '',
      launch_success: '',
      launch_landing: ''
    }]);
  }
}
