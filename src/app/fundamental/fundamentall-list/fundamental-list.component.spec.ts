import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentallListComponent } from './fundamentall-list.component';

describe('FundamentallListComponent', () => {
  let component: FundamentallListComponent;
  let fixture: ComponentFixture<FundamentallListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundamentallListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
