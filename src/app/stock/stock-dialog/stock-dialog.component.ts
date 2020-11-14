import {Component, Inject, OnInit} from '@angular/core';
import {CoreStockRepo} from "../../../repo/repo/CoreStockRepo";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {CoreStock} from "../../../repo/model/CoreStock";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-stock-dialog',
  templateUrl: './stock-dialog.component.html',
  styleUrls: ['./stock-dialog.component.css']
})
export class StockDialogComponent implements OnInit {
  stock: CoreStock
  code: string
  dialog: MatDialog

  option: String[]
  mycontrol = new FormControl()
  filterOption: Observable<String[]>


  constructor(@Inject(MAT_DIALOG_DATA) data, private coreStockRepo: CoreStockRepo) {
    console.log('-----------StockDialogComponent------------------' + data.code)
    this.code = data.code
    this.dialog = data.dialog

    this.coreStockRepo.getTags().subscribe(value => {
      this.option = value
      console.log(value)
    })

  }

  ngOnInit() {
    console.log('-----------StockDialogComponent------------------' + this.code)
    this.coreStockRepo.getCode(this.code).subscribe(value => {
      this.stock = value
      console.log(value)
    })


    this.filterOption = this.mycontrol.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )


  }

  _filter(value: string): String[] {
    console.log('------------FILTER---------' + value)
    const filter = value.toLowerCase()
    let x = this.option.filter(
      value1 => {
        console.log('------------VAL1---------' + value1 + '=')
        return value1.toLowerCase().includes(filter)
      }
    )
    return x
  }

  submitLogin() {
    console.log('-----------StockDialogComponent-------SUBMIT---1--------')
    this.dialog.closeAll()
    this.stock.tags = this.mycontrol.value

    this.coreStockRepo.save(this.stock).subscribe(
      (data) => {
        console.log('success----' + data);
      },
      (error) => {
        console.log('success----' + error);
      }
    )
  }

}






