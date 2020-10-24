import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {Comments} from "../../../repo/model/Comment";
import {CommentRepo} from "../../../repo/repo/CommentRepo";
import {DataTableDirective} from "angular-datatables";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CommentEditComponent} from "../comment-edit/comment-edit.component";

@Component({
  selector: 'app-comment-all',
  templateUrl: './comment-all.component.html',
  styleUrls: ['./comment-all.component.css']
})
export class CommentAllComponent implements OnInit, OnDestroy {

  constructor(private dialog: MatDialog, private commentRepo: CommentRepo) {
  }

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  isreject: boolean = false
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  data: Comments[]

  ngOnInit() {
    this.commentRepo.getAllCommentsbyUserid('rowan').subscribe(value => {
      this.data = value
      this.dtTrigger.next()
    })


    // We need to call the $.fn.dataTable like this because DataTables typings do not have the "ext" property
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      // const id = parseFloat(data[2]) || 0; // use data for the id column
      // if ((isNaN(this.min) && isNaN(this.max)) ||
      //   (isNaN(this.min) && id <= this.max) ||
      //   (this.min <= id && isNaN(this.max)) ||
      //   (this.min <= id && id <= this.max)) {
      //   return true;
      // }
      // return false;
      console.log('------dataTable------push----');
      const value = this.parseBoolean(data[2])
      // console.log('------dataTable----------' + this.isreject + "   :  " + value);
      //
      if (this.isreject && value) {
        console.log('------dataTable------true----');
        return true
      }
      if (!this.isreject && !value) {
        console.log('------dataTable------false----');
        return true
      }

      // return false;
//      return true
    });


    this.dtOptions = {
      pageLength: 20,
      autoWidth: true,
      pagingType: 'full_numbers',
      order: [[0, 'desc']]
    }

  }

  parseBoolean(s: string): boolean {
    return (s === 'true')
  }

  opencommentdialog(id: string) {
    console.log('-----------opencommentdialog------------------' + id)
    let a = new MatDialogConfig()
    a.autoFocus = true
    a.width = "60%"
    a.height = "600px"
    a.data = {
      dialog: this.dialog,
      id: id
    }
    this.dialog.open(CommentEditComponent, a)
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    $.fn['dataTable'].ext.search.pop();
  }

  FieldsChange(values: any) {
    console.log(values.currentTarget.checked);
    //this.dtTrigger.next()
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  // filterById(): void {
  //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.draw();
  //   });
  //}


}
