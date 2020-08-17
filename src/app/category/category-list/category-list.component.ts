import {Component, OnInit} from '@angular/core';
import {CategoryRepo} from "../../../repo/repo/CategoryRepo";

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

  ngOnInit() {

    this.categoryRepo.getAllCategory().subscribe(value => {
      this.category = value
      console.log(value.length)
    })


  }

  onSelection(event: any) {
    let valx = event.value
    this.categoryRepo.getAllCategoryTag(valx).subscribe(value => {
      this.tags = value
      console.log(value.length)
    })


  }

  onSumbit() {

  }
}
