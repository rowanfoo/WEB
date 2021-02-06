import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackermainComponent } from './trackermain.component';

describe('TrackermainComponent', () => {
  let component: TrackermainComponent;
  let fixture: ComponentFixture<TrackermainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackermainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
