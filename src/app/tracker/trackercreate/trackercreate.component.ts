import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CommentEditComponent} from "../../comment/comment-edit/comment-edit.component";

@Component({
  selector: 'app-trackercreate',
  templateUrl: './trackercreate.component.html',
  styleUrls: ['./trackercreate.component.css']
})
export class TrackercreateComponent implements OnInit {


  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }


  goClick(data) {
    this.openstockadd(data.value)
  }


  openstockadd(code: string) {
    console.log('-----------openstockadd------------------' + code)
    let a = new MatDialogConfig()
    a.autoFocus = true
    a.width = "90%"
    a.height = "95%"
    a.data = {
      code: code,
      dialog: this.dialog,
      period: 'SHORT',
    }
    this.dialog.open(CommentEditComponent, a)
  }

}
