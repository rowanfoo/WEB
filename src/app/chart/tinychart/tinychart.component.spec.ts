import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinychartComponent } from './tinychart.component';

describe('TinychartComponent', () => {
  let component: TinychartComponent;
  let fixture: ComponentFixture<TinychartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinychartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
