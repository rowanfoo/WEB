import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistdetailComponent } from './wishlistdetail.component';

describe('WishlistdetailComponent', () => {
  let component: WishlistdetailComponent;
  let fixture: ComponentFixture<WishlistdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
