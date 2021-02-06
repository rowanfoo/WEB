import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerchartlistComponent } from './trackerchartlist.component';

describe('TrackerchartlistComponent', () => {
  let component: TrackerchartlistComponent;
  let fixture: ComponentFixture<TrackerchartlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerchartlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerchartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
