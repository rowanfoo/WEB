import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryAutocompleteComponent } from './subcategory-autocomplete.component';

describe('SubcategoryAutocompleteComponent', () => {
  let component: SubcategoryAutocompleteComponent;
  let fixture: ComponentFixture<SubcategoryAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
