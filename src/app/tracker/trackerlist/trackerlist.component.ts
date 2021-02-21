import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CommentRepo} from "../../../repo/repo/CommentRepo";
import {TrackerRepo} from "../../../repo/repo/TrackerRepo";
import {ActivatedRoute, Router} from "@angular/router";
import {DataTableDirective} from "angular-datatables";
import {Subject} from "rxjs";
import {Comments} from "../../../repo/model/Comment";
import {CommentEditComponent} from "../../comment/comment-edit/comment-edit.component";

@Component({
  selector: 'app-trackerlist',
  templateUrl: './trackerlist.component.html',
  styleUrls: ['./trackerlist.component.css']
})
export class TrackerlistComponent implements OnInit {

  constructor(private dialog: MatDialog, private commentRepo: CommentRepo, private trackerRepo: TrackerRepo, private  route: ActivatedRoute, private router: Router) {
  }

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  isreject: boolean = true
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  data: Comments[]
  edit = false
  toggle = true

  ngOnInit() {
    this.trackerRepo.gettracker('rowan').subscribe(value => {
      this.data = value
      this.dtTrigger.next()
    })

    // We need to call the $.fn.dataTable like this because DataTables typings do not have the "ext" property
    //DO FILTERING on COLUMN
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      // const id = parseFloat(data[2]) || 0; // use data for the id column
      // if ((isNaN(this.min) && isNaN(this.max)) ||
      //   (isNaN(this.min) && id <= this.max) ||
      //   (this.min <= id && isNaN(this.max)) ||
      //   (this.min <= id && id <= this.max)) {
      //   return true;
      // }
      const value = this.parseBoolean(data[3])
      // console.log('------dataTable---VAL-------' + data[3]);
      console.log('------dataTable----------' + this.isreject + "   :  " + value);
      //
      if (this.isreject && value) {
        console.log('------dataTable------true----');
        return false
      } else {
        return true
        // we want to show reject === is_reject=true and when we uncheck box
      }
    });

    this.dtOptions = {
      pageLength: 20,
      autoWidth: true,
      pagingType: 'full_numbers',
      order: [[0, 'desc']]
    }
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

  removecode(code) {
    this.trackerRepo.deletecode('rowan', code.value.toUpperCase())
  }

  gotohistory(code) {
    console.log('-----------gotohistory------------------' + code)

    this.router.navigate(["tracker/code/" + code+'/SHORT']);

  }
}
