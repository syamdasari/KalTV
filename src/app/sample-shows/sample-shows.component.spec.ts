import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleShowsComponent } from './sample-shows.component';

describe('SampleShowsComponent', () => {
  let component: SampleShowsComponent;
  let fixture: ComponentFixture<SampleShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
