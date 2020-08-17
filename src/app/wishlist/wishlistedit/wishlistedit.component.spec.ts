import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlisteditComponent } from './wishlistedit.component';

describe('WishlisteditComponent', () => {
  let component: WishlisteditComponent;
  let fixture: ComponentFixture<WishlisteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlisteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlisteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
