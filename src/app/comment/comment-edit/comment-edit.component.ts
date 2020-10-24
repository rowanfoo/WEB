import {Component, Inject, OnInit} from '@angular/core';
import {CommentRepo} from "../../../repo/repo/CommentRepo";
import {MAT_DIALOG_DATA} from "@angular/material";
import * as moment from "moment";
import {MatDialog} from "@angular/material/dialog";

//import {Comment} from "../../../repo/model/Comment";

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
    isReject: false
  }

  dialog: MatDialog
  id: string

  constructor(@Inject(MAT_DIALOG_DATA) data, private commentRepo: CommentRepo) {
    this.comment.code = data.code
    this.dialog = data.dialog
    this.id = data.id
  }

  ngOnInit() {
    if (this.id != null) {
      this.commentRepo.getid(this.id).subscribe(value => {
        this.comment = value
      })
    }


  }

  submitLogin() {
    this.comment.userid = 'rowanf'
    console.log(this.comment);
    this.comment.date = moment().format('YYYY-MM-DD');
    this.commentRepo.saveComment(this.comment).subscribe(value => {
      console.log('success  ' + value);
    }, error1 => {
      console.log('errrr   ' + error1);
    })
    this.dialog.closeAll()
  }
}
