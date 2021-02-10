import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartguiComponent } from './chartgui.component';

describe('ChartguiComponent', () => {
  let component: ChartguiComponent;
  let fixture: ComponentFixture<ChartguiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartguiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartguiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
