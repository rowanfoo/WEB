import {Component, Inject, OnInit} from '@angular/core';
import {CommentRepo} from "../../../repo/repo/CommentRepo";
import {MAT_DIALOG_DATA} from "@angular/material";

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


  constructor(@Inject(MAT_DIALOG_DATA) data, private commentRepo: CommentRepo) {
    this.comment.code = data.code
  }

  ngOnInit() {
  }

  submitLogin() {
    this.comment.userid = 'rowanf'
    console.log(this.comment);
    this.commentRepo.saveComment(this.comment).subscribe(value => {
      console.log('success  ' + value);
    }, error1 => {
      console.log('errrr   ' + error1);
    })
  }
}
