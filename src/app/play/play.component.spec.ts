import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PLAYComponent } from './play.component';

describe('PLAYComponent', () => {
  let component: PLAYComponent;
  let fixture: ComponentFixture<PLAYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PLAYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PLAYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
