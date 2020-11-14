import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryRepo} from "../../../../repo/repo/CategoryRepo";

@Component({
  selector: 'app-subcategory-autocomplete',
  templateUrl: './subcategory-autocomplete.component.html',
  styleUrls: ['./subcategory-autocomplete.component.css']
})
export class SubcategoryAutocompleteComponent implements OnInit {

  option: String[] = []

  constructor(private categoryRepo: CategoryRepo) {
    this.categoryRepo.getSubcategory().subscribe(value => {
      this.option = value
      console.log('--------------CategoryAutocompleteComponent-------------')
      console.log(value)

    })
  }

  ngOnInit() {

  }


  @Output() myeventsubcategorydata = new EventEmitter<string>();


  onSelection(event: string) {
//    let valx = event.value
    this.myeventsubcategorydata.emit(event);
    // this.categoryRepo.getAllCategoryTag(valx).subscribe(value => {
    //   this.tags = value
    //   console.log(value.length)
    // })
  }

}
