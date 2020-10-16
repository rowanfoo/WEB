import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material";
import {CookieService} from "ngx-cookie-service";
import {NewsRepo} from "../../../repo/repo/NewsRepo";
import {NewsDataSourceDataSource} from "./NewsDataSource";
import {tap} from "rxjs/internal/operators/tap";

@Component({
  selector: 'app-news-all',
  templateUrl: './news-all.component.html',
  styleUrls: ['./news-all.component.css']
})
export class NewsAllComponent implements OnInit {

  constructor(private  newsRepo: NewsRepo, private  cookieService: CookieService) {
  }

  // news: News[];
  // totalElements: number = 0;


  displayedColumns = ['date', 'code', 'title'];
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
          this.paginator.length = count ;
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

  //   ngOnInit() {
  //   let date = this.cookieService.get('historydate')
  //   this.newsRepo.getAllNewsbyDate(date, {page: "0", size: "50"}).subscribe(value => {
  //     console.log('-------NewsAllComponent----arr------' + value.length)
  //     this.news = value
  //     this.totalElements = value.length
  //
  //   })
  //
  //
  // }
  //
  //
  // nextPage(event: PageEvent) {
  //   const request = {};
  //   request['page'] = event.pageIndex.toString();
  //   request['size'] = event.pageSize.toString();
  //   //  this.getTodos(request);
  //
  //   let date = this.cookieService.get('historydate')
  //   this.newsRepo.getAllNewsbyDate(date, {page: event.pageIndex.toString(), size: "50"}).subscribe(value => {
  //
  //     this.news = value
  //     this.totalElements = value.length
  //
  //   })
  //
  // }
  //

}
