import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAllComponent } from './comment-all.component';

describe('CommentAllComponent', () => {
  let component: CommentAllComponent;
  let fixture: ComponentFixture<CommentAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
