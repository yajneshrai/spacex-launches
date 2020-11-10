import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockLaunchDataService } from 'src/app/services/launch-data.service.spec';

import { LaunchResultsComponent } from './launch-results.component';

describe('LaunchResultsComponent', () => {
  let component: LaunchResultsComponent;
  let fixture: ComponentFixture<LaunchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchResultsComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ MockLaunchDataService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading text when records are being fetched', () => {
    component.isLoading = true;
    const text = fixture.nativeElement.querySelector('.launch-result-container h3').textContent;
    expect(text).toBe('Loading...');
  });

  it('should show message when no matching records found', () => {
    component.isLoading = false;
    component.launchRecords = [];
    fixture.detectChanges();
    const text = fixture.nativeElement.querySelector('.launch-result-container h3').textContent;
    expect(text).toBe('No records found!');
  });
});
