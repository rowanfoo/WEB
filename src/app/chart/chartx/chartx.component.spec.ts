import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartxComponent } from './chartx.component';

describe('ChartxComponent', () => {
  let component: ChartxComponent;
  let fixture: ComponentFixture<ChartxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
