import {Component, Inject, OnInit} from '@angular/core';
import {CoreStockRepo} from "../../../repo/repo/CoreStockRepo";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {CoreStock} from "../../../repo/model/CoreStock";

@Component({
  selector: 'app-stock-dialog',
  templateUrl: './stock-dialog.component.html',
  styleUrls: ['./stock-dialog.component.css']
})
export class StockDialogComponent implements OnInit {
  stock: CoreStock
  code: string
  dialog: MatDialog

  constructor(@Inject(MAT_DIALOG_DATA) data, private coreStockRepo: CoreStockRepo) {
    console.log('-----------StockDialogComponent------------------' + data.code)
    this.code = data.code
    this.dialog = data.dialog
  }

  ngOnInit() {
    console.log('-----------StockDialogComponent------------------' + this.code)
    this.coreStockRepo.getCode(this.code).subscribe(value => {
      this.stock = value
      console.log(value)

    })

  }

  submitLogin() {
    console.log('-----------StockDialogComponent-------SUBMIT-----------')
    this.dialog.closeAll()
    this.coreStockRepo.save(this.stock).subscribe(
      (data) => {
        console.log('success----' + data);
      },
      (error) => {
        console.log('success----' + error);
      }
    );
  }


}






