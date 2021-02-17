import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackercreateComponent } from './trackercreate.component';

describe('TrackercreateComponent', () => {
  let component: TrackercreateComponent;
  let fixture: ComponentFixture<TrackercreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackercreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
