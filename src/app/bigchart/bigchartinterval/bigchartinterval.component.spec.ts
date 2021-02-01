import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigchartintervalComponent } from './bigchartinterval.component';

describe('BigchartintervalComponent', () => {
  let component: BigchartintervalComponent;
  let fixture: ComponentFixture<BigchartintervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigchartintervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigchartintervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
