import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaychartComponent } from './displaychart.component';

describe('DisplaychartComponent', () => {
  let component: DisplaychartComponent;
  let fixture: ComponentFixture<DisplaychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
