import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigchartcompareComponent } from './bigchartcompare.component';

describe('BigchartcompareComponent', () => {
  let component: BigchartcompareComponent;
  let fixture: ComponentFixture<BigchartcompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigchartcompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigchartcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
