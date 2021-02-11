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
    reject: '',
    isReject: false,
    image: new Array(1)
  }

  dialog: MatDialog
  id: string

  constructor(@Inject(MAT_DIALOG_DATA) data, private commentRepo: CommentRepo) {
    this.comment.code = data.code
    this.dialog = data.dialog
    this.id = data.id
    this.mycode = data.code
    console.log('======CommentEditComponent========' + this.comment.code)
  }

  toshow = false
  mycode

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
    this.comment.userid = 'rowanf'
    console.log(this.comment);
    this.comment.date = moment().format('YYYY-MM-DD');
    if (this.toshow) {


      // export interface ImageChart {
      //   id: string,
      //   date: string,
      //   refid: string,
      //   image: string,
      // }
      this.child.updateChart(this.saveimage);

    } else {
      this.save(this.comment)
    }

    this.dialog.closeAll()
  }

  private saveimage(data) {
    console.log('--saveimage----1--------')
    console.log(data)
    let abc = new ImageChart(null, moment().format('YYYY-MM-DD'), null, data)
    console.log('--saveimage----2--------')
    //  this.comment.image = new Array()
    console.log('--saveimage----2.1--------' + this.comment.image.length)
    this.comment.image[0] = abc

    //   this.comment.image.push(abc)
    console.log('--saveimage----3--------')

    //  this.save(this.comment)
    console.log('-saveimage---4----------')

  }

  private save(comment: Comments) {
    this.commentRepo.saveComment(comment).subscribe(value => {

      console.log('success  ' + value);
      console.log(value.id);

    }, error1 => {
      console.log('errrr   ' + error1);
    })

  }

}
