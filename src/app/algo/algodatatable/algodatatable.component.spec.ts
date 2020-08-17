import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgodatatableComponent } from './algodatatable.component';

describe('AlgodatatableComponent', () => {
  let component: AlgodatatableComponent;
  let fixture: ComponentFixture<AlgodatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgodatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgodatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
