import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigchartmagComponent } from './bigchartmag.component';

describe('BigchartmagComponent', () => {
  let component: BigchartmagComponent;
  let fixture: ComponentFixture<BigchartmagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigchartmagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigchartmagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
