import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsCastComponent } from './shows-cast.component';

describe('ShowsCastComponent', () => {
  let component: ShowsCastComponent;
  let fixture: ComponentFixture<ShowsCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
