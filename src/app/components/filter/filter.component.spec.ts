import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
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

  /* it('URL changes ', () => {

  }) */

});


/* class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.queryParams = of({ launch_year: 2015 });
  }
} */
