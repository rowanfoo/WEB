import {Component, OnInit} from '@angular/core';
import {CategoryRepo} from "../../../repo/repo/CategoryRepo";
import {Subject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryRepo: CategoryRepo, private route: Router) {
  }

  category: string[]
  subcategory: string[]

  tags: string[]
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  data;
  codes: string

  ngOnInit() {
    console.log('-------------------------CategoryListComponent-----INIT-----------')

    this.categoryRepo.getAllCategory().subscribe(value => {
      this.category = value
      console.log(value.length)
    })

    this.categoryRepo.getSubcategory().subscribe(value => {
      this.subcategory = value
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

  onSelectionSub(event: any) {
    let valx = event.value
    this.categoryRepo.getCategoryStock('subcategory', valx).subscribe(value => {
      this.data = value
      console.log(value.length)
    })

  }


  listensubcategoryevent(event) {
    this.tabledata('subcategory', event.value)
  }

  listentagsyevent(event) {

    console.log('-----listentagsyevent------------')
    //this.tabledata('tags', event)

    this.categoryRepo.getCatetoryCodes('tags', event).subscribe(value => {

      console.log('-----getCatetoryCodes-------')
      console.log(value)
      let s = value.join(',');
      console.log('--------------------------')
      console.log(s)
      this.route.navigate(["other/category/wishlistdetail/" + s]);
    })

  }

  tabledata(mode: string, name: string) {
    // this.route.navigate(["wishlist/wishlistdetail/" + mycode]);

    this.categoryRepo.getCategoryStock(mode, name).subscribe(value => {
      this.data = value
      console.log(value.length)
      this.code(this.data)
      console.log('-----listentagsyevent---DATA-----')
      console.log(value)
      this.dtTrigger.next()
    })

  }

  code(data) {
    this.codes = data.map(o => o.code).join(',');
  }

  onSumbit() {

  }
}
