import {Component, OnInit} from '@angular/core';
import {CategoryRepo} from "../../../repo/repo/CategoryRepo";
import {Subject} from "rxjs";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryRepo: CategoryRepo) {
  }

  category: string[]
  tags: string[]
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  data;
  codes: string

  ngOnInit() {

    this.categoryRepo.getAllCategory().subscribe(value => {
      this.category = value
      console.log(value.length)
    })

    this.dtOptions = {
      pageLength: 30,
      retrieve: true,
      autoWidth: true,
      pagingType: 'full_numbers',
      order: [[2, 'desc']],
      dom: 'Bfrtip',
      buttons: [
        'columnsToggle',
        'colvis',
      ]
    }
  }


  onSelection(event: any) {
    let valx = event.value
    this.categoryRepo.getCategoryStock('category', valx).subscribe(value => {
      this.data = value
      console.log(value.length)
    })

  }

  listensubcategoryevent(event) {
    this.tabledata('subcategory', event.value)
  }

  listentagsyevent(event) {
    this.tabledata('tags', event)
  }

  tabledata(mode: string, name: string) {
    this.categoryRepo.getCategoryStock(mode, name).subscribe(value => {
      this.data = value
      console.log(value.length)
      this.code(this.data)
      this.dtTrigger.next()
    })

  }

  code(data) {
    this.codes = data.map(o => o.code).join(',');
  }

  onSumbit() {

  }
}
