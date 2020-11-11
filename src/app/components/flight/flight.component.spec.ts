import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightComponent } from './flight.component';

describe('FlightComponent', () => {
  let component: FlightComponent;
  let fixture: ComponentFixture<FlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightComponent);
    component = fixture.componentInstance;
    component.flight = {
      flight_number: '6',
      mission_name: 'Falcon 9 Test Flight',
      links: {
        mission_patch: 'https://images2.imgbox.com/d6/12/yxne8mMD_o.png'
      },
      mission_id: ['Falcon 9 Test Flight'],
      launch_year: '2010',
      launch_success: true,
      rocket: {
        first_stage: {
          cores: [ {
            land_success: true
          } ]
        }
      },
      launch_landing: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display mission name and number', () => {
    const missionTitle = fixture.nativeElement.querySelector('.flight > .flight-label').textContent;
    expect(missionTitle).toContain('Falcon 9 Test Flight #6');
  });

  it('should display mission icon image', () => {
    const imageUrl = fixture.nativeElement.querySelector('.flight > .flight-img img').src;
    expect(imageUrl).toEqual(component.flight.links.mission_patch);
  });

  it('should display mission year', () => {
    const missionYear = fixture.nativeElement.querySelector('.flight > .flight-launch-year span').textContent;
    expect(missionYear).toEqual('2010');
  });

  it('should display mission launch status', () => {
    const missionLaunch = fixture.nativeElement.querySelector('.flight > .flight-launch-success span').textContent;
    expect(missionLaunch).toEqual('True');
  });

  it('should display mission landing status', () => {
    const missionLand = fixture.nativeElement.querySelector('.flight > .flight-land-success span').textContent;
    expect(missionLand).toEqual('True');
  });
});
