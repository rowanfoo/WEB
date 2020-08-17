import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalchartComponent } from './intervalchart.component';

describe('IntervalchartComponent', () => {
  let component: IntervalchartComponent;
  let fixture: ComponentFixture<IntervalchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
