import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistsummaryComponent } from './wishlistsummary.component';

describe('WishlistsummaryComponent', () => {
  let component: WishlistsummaryComponent;
  let fixture: ComponentFixture<WishlistsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
