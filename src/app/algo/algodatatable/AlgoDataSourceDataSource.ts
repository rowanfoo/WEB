import {DataSource} from "@angular/cdk/table";
import {BehaviorSubject, Observable} from "rxjs";
import {CollectionViewer} from "@angular/cdk/collections";
import {AlgoRepo} from "../../../repo/repo/AlgoRepo";
import {CommonFunction} from "../../../etc/CommonFunction";
import {TechStr} from "../../../repo/model/TechStr";
import * as _ from 'underscore';

export class AlgoDataSourceDataSource implements DataSource<TechStr> {

  private todoSubject = new BehaviorSubject<TechStr[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private countSubject = new BehaviorSubject<number>(0);
  public counter$ = this.countSubject.asObservable();


  constructor(private  algo: AlgoRepo, private  commonFunction: CommonFunction, private callbackfn: (data) => void, private   type: string) {
  }


  connect(collectionViewer: CollectionViewer): Observable<TechStr[]> {
    return this.todoSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.todoSubject.complete();
    this.loadingSubject.complete();
    this.countSubject.complete();
  }


  loadTodos(pageNumber = 0, pageSize = 35) {
    // this.loadingSubject.next(true);
    // let date = this.cookieService.get('historydate')
    //
    // if (this.cookieService.get('historyweek') != null || this.cookieService.get('historyweek') != '') {
    //   date = this.cookieService.get('historyweek')
    // }
    //
    //
    // console.log('----------------NewsDataSourceDataSource----LOAD NEWS--------------' + date)
    // console.log(date)
    // console.log('--------123-------')
    // if (date == 'Invalid date') {
    //   console.log('--------XXX---------')
    //   date = null
    // }
    //
    // this.newsRepo.getAllNewsbyDate(date, {page: pageNumber, size: pageSize}).subscribe(value => {
    //   this.todoSubject.next(value.content);
    //   console.log('----------------TableDataSource----LOAD NEWS--------------')
    //   console.log(value.content)
    //   this.countSubject.next(value.totalElements);
    // })
    //
    let date = this.commonFunction.fngetDate()


    this.algo.getAlgo(this.type, date, {page: pageNumber, size: pageSize})
      .subscribe(
        (data) => {
          // _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
          //var stooges = _.sortBy(data.content, 'fundamental.market_cap');

          var stooges = _.sortBy(data.content, function (num) {
            return num.fundamental.market_cap
          }).reverse()
          // this.todoSubject.next(data.content);
          this.todoSubject.next(stooges)
          console.log('----------------TableDataSource----LOAD ALGO--------------')
          console.log(data.content)
          console.log('----------------TableDataSource-----LOAD ALGO--=----DATA===TOTAL------------' + data.content.length)
          console.log('----------------TableDataSource-----LOAD ALGO--TOTAL------------' + data.totalElements)
          console.log(stooges)

          this.countSubject.next(data.totalElements);
        }
      )


  }

}
