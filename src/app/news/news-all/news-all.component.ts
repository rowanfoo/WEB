import {Component, OnInit, ViewChild} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {NewsRepo} from "../../../repo/repo/NewsRepo";
import {NewsDataSourceDataSource} from "./NewsDataSource";
import {tap} from "rxjs/internal/operators/tap";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {StockDialogComponent} from "../../stock/stock-dialog/stock-dialog.component";
import {CommentEditComponent} from "../../comment/comment-edit/comment-edit.component";
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-news-all',
  templateUrl: './news-all.component.html',
  styleUrls: ['./news-all.component.css']
})
export class NewsAllComponent implements OnInit {

  constructor(private dialog: MatDialog, private  newsRepo: NewsRepo, private  cookieService: CookieService) {
  }

  // news: News[];
  // totalElements: number = 0;


  displayedColumns = ['date', 'code', 'title', 'category', 'subcategory'];
  todoDatasource: NewsDataSourceDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.todoDatasource = new NewsDataSourceDataSource(this.newsRepo, this.cookieService);
    this.todoDatasource.loadTodos();
  }

  ngAfterViewInit() {
    this.todoDatasource.counter$
      .pipe(
        tap((count) => {
          this.paginator.length = count;
        })
      )
      .subscribe();

    this.paginator.page
      .pipe(
        tap(() => this.loadTodos())
      )
      .subscribe();
  }

  loadTodos() {
    this.todoDatasource.loadTodos(this.paginator.pageIndex, this.paginator.pageSize);
  }

  onAllUserPaginateChange(event: any) {
    console.log('----------onAllUserPaginateChange-----------')
    console.log(event)

    const matTable = document.getElementById('matTable');
    // matTable.scrollTop = 0;
    matTable.scrollIntoView();
  }

  openstockedit(code: string) {
    console.log('-----------openstockedit------------------' + code)
    let a = new MatDialogConfig()
    a.autoFocus = true
    a.width = "60%"
    a.height = "600px"
    a.data = {
      code: code,
      dialog: this.dialog
    }
    this.dialog.open(StockDialogComponent, a)
  }

  openstockadd(code: string) {
    console.log('-----------openstockadd------------------' + code)
    let a = new MatDialogConfig()
    a.autoFocus = true
    a.width = "90%"
    a.height = "95%"
    a.data = {
      code: code,
      dialog: this.dialog
    }
    this.dialog.open(CommentEditComponent, a)
  }


}
