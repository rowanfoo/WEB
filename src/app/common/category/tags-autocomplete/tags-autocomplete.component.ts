import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryRepo} from "../../../../repo/repo/CategoryRepo";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tags-autocomplete',
  templateUrl: './tags-autocomplete.component.html',
  styleUrls: ['./tags-autocomplete.component.css']
})
export class TagsAutocompleteComponent implements OnInit {

  option: String[] = []
  mycontrol = new FormControl()
  filterOption: Observable<String[]>

  constructor(private categoryRepo: CategoryRepo) {
    this.categoryRepo.getTags().subscribe(value => {
      this.option = value
      console.log('--------------CategoryAutocompleteComponent-------------')
      console.log(value)

    })
  }

  ngOnInit() {


    this.filterOption = this.mycontrol.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )

  }

  _filter(value: string): String[] {
    //  console.log('------------FILTER---------' + value)
    const filter = value.toLowerCase()
    let x = this.option.filter(
      value1 => {
        //    console.log('------------VAL1---------' + value1 + '=')
        if (value1 == null) return false
        return value1.toLowerCase().includes(filter)
      }
    )
    return x
  }


  @Output() myeventtagsdata = new EventEmitter<string>();


  onSelection(event) {
//    let valx = event.value
//     console.log('------------onSelection---------' + event.source.value)
    console.log('------------onSelection---------' + event)

    console.log(event)
    this.myeventtagsdata.emit(event);
    // this.categoryRepo.getAllCategoryTag(valx).subscribe(value => {
    //   this.tags = value
    //   console.log(value.length)
    // })
  }

}
