import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CommentEditComponent} from "../../comment/comment-edit/comment-edit.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-multi-icon',
  templateUrl: './multi-icon.component.html',
  styleUrls: ['./multi-icon.component.css']
})
export class MultiIconComponent implements OnInit {

  constructor(private dialog: MatDialog, private route: Router) {
  }


  ngOnInit() {
  }

  @Input() code: string;
  @Input() path: string;

  openCommentEdit() {
    console.log(this.code);
    let a = new MatDialogConfig()
    a.autoFocus = true
    a.width = "60%"
    a.data = {
      code: this.code
    }
    this.dialog.open(CommentEditComponent, a)
  }

  openallsummary() {
    this.route.navigate([this.path + "/allsummary/" + this.code]);
  }

  openmultichart() {
    this.route.navigate([this.path + "/multichart/" + this.code]);
  }


}




