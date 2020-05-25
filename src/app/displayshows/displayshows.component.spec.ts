import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayshowsComponent } from './displayshows.component';

describe('DisplayshowsComponent', () => {
  let component: DisplayshowsComponent;
  let fixture: ComponentFixture<DisplayshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
