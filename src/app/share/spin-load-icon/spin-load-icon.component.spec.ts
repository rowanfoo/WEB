import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinLoadIconComponent } from './spin-load-icon.component';

describe('SpinLoadIconComponent', () => {
  let component: SpinLoadIconComponent;
  let fixture: ComponentFixture<SpinLoadIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinLoadIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinLoadIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
