import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TechStr} from "../../../repo/model/TechStr";
import {AlgoRepo} from "../../../repo/repo/AlgoRepo";
import {ActivatedRoute} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {CommonFunction} from "../../../etc/CommonFunction";
import {AlgoDataSourceDataSource} from "./AlgoDataSourceDataSource";
import {MatPaginator} from "@angular/material/paginator";
import {tap} from "rxjs/internal/operators/tap";

@Component({
  selector: 'app-algodatatable',
  templateUrl: './algodatatable.component.html',
  styleUrls: ['./algodatatable.component.css']
})


export class AlgodatatableComponent implements OnInit, OnDestroy {
  data: TechStr[]

  constructor(private algo: AlgoRepo, private  route: ActivatedRoute, private  cookieService: CookieService, private commonFunction: CommonFunction) {
  }

  codes: string
  displayedColumns = ['code', 'name', 'type', 'message', 'chart', 'marketcap', 'indicator', 'news', 'date'];
  todoDatasource: AlgoDataSourceDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    let type = this.route.snapshot.params['type'];
    this.todoDatasource = new AlgoDataSourceDataSource(this.algo, this.commonFunction, this.callback, type)
    this.todoDatasource.loadTodos();
  }

  callback(data: TechStr[]) {
    let temp: string = ""
    data.forEach(value1 => {
      temp = temp + value1.code + ","
    })
    this.codes = temp.substring(0, temp.length - 1)
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

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
  }
}
