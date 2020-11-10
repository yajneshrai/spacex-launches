import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title', () => {
    const title = fixture.nativeElement.querySelector('.container h2').textContent;
    expect(title).toBe('SpaceX Launch Programs');
  });

  it('should show developer name', () => {
    const title = fixture.nativeElement.querySelector('.developer-info h3').textContent;
    expect(title).toContain('Yajnesh Rai');
  });

});
