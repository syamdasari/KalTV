import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSelectCountryComponent } from './schedule-select-country.component';

describe('ScheduleSelectCountryComponent', () => {
  let component: ScheduleSelectCountryComponent;
  let fixture: ComponentFixture<ScheduleSelectCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleSelectCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSelectCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
