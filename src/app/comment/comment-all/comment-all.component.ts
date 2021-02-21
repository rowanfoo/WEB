import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {Comments} from "../../../repo/model/Comment";
import {CommentRepo} from "../../../repo/repo/CommentRepo";
import {DataTableDirective} from "angular-datatables";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CommentEditComponent} from "../comment-edit/comment-edit.component";
import * as _ from 'underscore';
import {ActivatedRoute, Router} from "@angular/router";
import {TrackerRepo} from "../../../repo/repo/TrackerRepo";

@Component({
  selector: 'app-comment-all',
  templateUrl: './comment-all.component.html',
  styleUrls: ['./comment-all.component.css']
})
export class CommentAllComponent implements OnInit, OnDestroy {

  constructor(private dialog: MatDialog, private commentRepo: CommentRepo, private trackerRepo: TrackerRepo, private  route: ActivatedRoute, private router: Router) {
  }

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  isreject: boolean = false
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  data: Comments[]
  edit = false
  toggle = true
  codesremove: string[] = []
  period: string
  codefilter: string
  codecreate = ''

  ngOnInit() {

    console.log('-----CommentAllComponent----');
    this.period = this.route.snapshot.params['period']

    if (this.period == null) {
      this.period = 'LONG'
      this.commentRepo.getAllCommentbyPeriod('rowan', this.period).subscribe(value => {
        this.data = value
        this.dtTrigger.next()
      })
    } else {
      this.trackerRepo.gettracker('rowan').subscribe(value => {
        this.data = value
        this.dtTrigger.next()
      })
    }

    // this.commentRepo.getAllCommentsbyUserid('rowan').subscribe(value => {
    //   this.data = value
    //   this.dtTrigger.next()
    // })

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
      let mycode = data[1].substring(0, data[1].indexOf('.') + 3)
      console.log('------dataTable------mycode----' + mycode)

      let checkcodebool = this.checkcode(mycode)
      console.log('------dataTable------checkcodebool----' + checkcodebool)
      // console.log('------dataTable----------' + this.isreject + "   :  " + value);
      //
      if (this.isreject && value && checkcodebool) {
        console.log('------dataTable------true----');
        return true
      }
      if (!this.isreject && !value && checkcodebool) {
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

  checkcode(code: string) {
    if (this.codefilter == null) return true
    if (this.codefilter.trim() == '') return true
    if (code == this.codefilter.trim().toUpperCase()) return true
    return false
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


  onCheckboxChange(e) {

    if (e.target.checked) {
      this.codesremove.push(e.target.value)

    } else {
      this.codesremove = _.without(this.codesremove, e.target.value);
    }

    console.log('-----------ALL VALL ------------------' + this.codesremove)
  }

  // deleteComment
  submit() {
    if (this.period == null) {
      this.commentRepo.delete(this.codesremove.join(","))
      this.ngOnInit()
    } else {

      // this.trackerRepo.deletecode('rowan',this.codesremove).subscribe(value => {
      //   this.data = value
      //   this.dtTrigger.next()
      // })


    }


  }


  editmode() {
    if (this.toggle) {
      this.edit = true
      this.toggle = false
    } else {
      this.edit = false
      this.toggle = true
    }

  }

  createcomment() {
    console.log('-----------createcomment------------------')
    if (this.codecreate == '') return
    let a = new MatDialogConfig()
    a.autoFocus = true
    a.width = "90%"
    a.height = "95%"
    a.data = {
      code: this.codecreate.trim().toUpperCase(),
      dialog: this.dialog
    }
    this.dialog.open(CommentEditComponent, a)
    this.codecreate = ''
  }

  gotohistory(code) {
    console.log('-----------gotohistory------------------' + code)

    this.router.navigate(["tracker/code/" + code + '/LONG']);

  }


}
