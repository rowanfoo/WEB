import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinichartComponent } from './minichart.component';

describe('MinichartComponent', () => {
  let component: MinichartComponent;
  let fixture: ComponentFixture<MinichartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinichartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinichartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
