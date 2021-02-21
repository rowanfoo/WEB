import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

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

}
