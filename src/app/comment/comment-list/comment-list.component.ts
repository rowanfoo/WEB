import {Component, Input, OnInit} from '@angular/core';
import {CommentRepo} from "../../../repo/repo/CommentRepo";
import {Comments} from "../../../repo/model/Comment";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  constructor(private commentRepo: CommentRepo) {
  }

  comments: Comments[]
  @Input() code: string

  ngOnInit() {
    this.commentRepo.getAllCommentbyCode(this.code).subscribe(value => {
      this.comments = value
    })
  }

}
