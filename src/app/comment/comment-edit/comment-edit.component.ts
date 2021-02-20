import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {CommentRepo} from "../../../repo/repo/CommentRepo";
import * as moment from "moment";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ImageChart} from "../../../repo/model/ImageChart";
import {Comments} from "../../../repo/model/Comment";
import {ChartguiComponent} from "../../chart/chartgui/chartgui.component";

//import {Comment} from "../../../repo/model/Comment";
//import {ImageChart} from "./ImageChart";

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {

  comment = {
    id: null,
    userid: '',
    code: '',
    text: '',
    date: '',
    type: 'equity',
    period: 'LONG',
    reject: '',
    isReject: false,
    imageCharts: new Array(1)
    // image: []
  }

  dialog: MatDialog
  id: string
  toshow = false
  mycode


  constructor(@Inject(MAT_DIALOG_DATA) data, private commentRepo: CommentRepo) {
    this.id = data.id
    if (data.code != null) {
      this.comment.code = data.code.toUpperCase()
      this.mycode = data.code.toUpperCase()
    }


    this.dialog = data.dialog
    if (data.period != null) {
      if (data.period == 'SHORT') {
        this.comment.text = 'support:\n  resistance:\n   reason:\n '
      }
    }

    console.log('======CommentEditComponent========' + this.comment.code)
  }

  ngOnInit() {
    console.log('======CommentEditComponent===ngOnInit=====' + this.id)
    if (this.id != null) {
      this.commentRepo.getid(this.id).subscribe(value => {
        this.comment = value
      })
    }


  }

  showChart() {
    this.toshow = true
  }

  @ViewChild(ChartguiComponent) child: ChartguiComponent;

  submitLogin() {
    this.comment.userid = 'rowan'
    console.log(this.comment);
    this.comment.date = moment().format('YYYY-MM-DD');
    if (this.toshow) {
      //!!! tricky the callback function save,image
      this.child.updateChart(this, this.saveimage);
    } else {
      this.save(this.comment)
    }
    this.dialog.closeAll()
  }

  private saveimage(self, data) {
    //!!! tricky the callback function save,image , if you use this.comment ... = error , this is equal to caller , caller here is ChartguiComponent not itself CommentEditComponent

    let abc = new ImageChart(null, moment().format('YYYY-MM-DD'), null, data)
    self.comment.imageCharts.push(abc)
    self.save(self.comment)
  }

  temptext = ''

  private selectbox() {
    if (this.comment.period === 'SHORT') {
      this.temptext = this.comment.text
      this.comment.text = 'support:\n  resistance:\n   reason:\n '
    } else {
      this.comment.text = this.temptext
    }
  }

  private save(comment: Comments) {
    comment.code = comment.code.trim().toUpperCase()
    this.commentRepo.saveComment(comment).subscribe(value => {

      console.log('success  ' + value);
      console.log(value.id);

    }, error1 => {
      console.log('errrr   ' + error1);
    })

  }

}
