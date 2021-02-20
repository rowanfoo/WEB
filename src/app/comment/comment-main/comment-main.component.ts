import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CommentEditComponent} from "../comment-edit/comment-edit.component";

@Component({
  selector: 'app-comment-main',
  templateUrl: './comment-main.component.html',
  styleUrls: ['./comment-main.component.css']
})
export class CommentMainComponent implements OnInit {


  constructor(private dialog: MatDialog, private route: Router) {
  }

  ngOnInit(): void {
  }

  create() {
    this.route.navigate(["tracker/create"]);
  }

  chart() {
    this.route.navigate(["tracker/chart"]);
  }

  list() {
    this.route.navigate(["comment/list"]);

  }

  openstockadd() {
    console.log('-----------openstockadd------------------')
    let a = new MatDialogConfig()
    a.autoFocus = true
    a.width = "90%"
    a.height = "95%"
    a.data = {
      code: 'XXX.AX',
      dialog: this.dialog
    }
    this.dialog.open(CommentEditComponent, a)
  }

}
