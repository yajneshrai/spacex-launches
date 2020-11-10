import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [ RouterTestingModule.withRoutes([{
        path: 'launches', redirectTo: ''
      }]) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a key-value to filter when new value selected', () => {
    const expectedFilter = { launch_year: '2015' };
    component.updateQuery('launch_year', '2015');
    expect(component.filter).toEqual(expectedFilter);
  });

  it('should remove a key-value from filter if same value selected', () => {
    component.filter = { launch_year: '2015' };
    const expectedFilter = {};
    component.updateQuery('launch_year', '2015');
    expect(component.filter).toEqual(expectedFilter);
  });

  it('should update the URL with query params after filter changes', fakeAsync(() => {
    const launchYearElement = fixture.nativeElement.querySelector('.option-col span.option');
    const lanuchYearText = launchYearElement.textContent.trim();
    launchYearElement.click();
    tick();
    expect(router.url).toContain('?launch_year=' + lanuchYearText);
  }));

  it('should add new class for background color on option click', () => {
    const launchYearElement = fixture.nativeElement.querySelector('.option-col span.option');
    launchYearElement.click();
    fixture.detectChanges();
    expect(launchYearElement.classList).toContain('selected');
  });
});

