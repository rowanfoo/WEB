import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigchartviewComponent } from './bigchartview.component';

describe('BigchartviewComponent', () => {
  let component: BigchartviewComponent;
  let fixture: ComponentFixture<BigchartviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigchartviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigchartviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
