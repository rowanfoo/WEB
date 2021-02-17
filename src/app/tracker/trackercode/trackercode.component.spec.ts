import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackercodeComponent } from './trackercode.component';

describe('TrackercodeComponent', () => {
  let component: TrackercodeComponent;
  let fixture: ComponentFixture<TrackercodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackercodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackercodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
