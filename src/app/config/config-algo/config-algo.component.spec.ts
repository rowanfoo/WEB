import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAlgoComponent } from './config-algo.component';

describe('ConfigAlgoComponent', () => {
  let component: ConfigAlgoComponent;
  let fixture: ComponentFixture<ConfigAlgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigAlgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
