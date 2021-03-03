import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtinychartComponent } from './listtinychart.component';

describe('ListtinychartComponent', () => {
  let component: ListtinychartComponent;
  let fixture: ComponentFixture<ListtinychartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtinychartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtinychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
