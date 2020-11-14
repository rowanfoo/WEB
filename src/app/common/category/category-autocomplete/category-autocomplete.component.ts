import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryRepo} from "../../../../repo/repo/CategoryRepo";

@Component({
  selector: 'app-category-autocomplete',
  templateUrl: './category-autocomplete.component.html',
  styleUrls: ['./category-autocomplete.component.css']
})
export class CategoryAutocompleteComponent implements OnInit {

  option: String[] = []

  constructor(private categoryRepo: CategoryRepo) {
    this.categoryRepo.getAllCategory().subscribe(value => {
      this.option = value
      console.log('--------------CategoryAutocompleteComponent-------------')
      console.log(value)

    })
  }

  ngOnInit() {

  }


  @Output() myeventdata = new EventEmitter<string>();

  // select(type: string) {
  //   this.myeventdata.emit(type);
  // }

  onSelection(event: string) {
//    let valx = event.value
    this.myeventdata.emit(event);
    // this.categoryRepo.getAllCategoryTag(valx).subscribe(value => {
    //   this.tags = value
    //   console.log(value.length)
    // })
  }

}
