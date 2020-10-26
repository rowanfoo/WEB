import {DataSource} from "@angular/cdk/table";
import {News} from "../../../repo/model/News";
import {BehaviorSubject, Observable} from "rxjs";
import {NewsRepo} from "../../../repo/repo/NewsRepo";
import {CollectionViewer} from "@angular/cdk/collections";
import {CookieService} from "ngx-cookie-service";

export class NewsDataSourceDataSource implements DataSource<News> {

  private todoSubject = new BehaviorSubject<News[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private countSubject = new BehaviorSubject<number>(0);
  public counter$ = this.countSubject.asObservable();

  constructor(private  newsRepo: NewsRepo, private  cookieService: CookieService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<News[]> {
    return this.todoSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.todoSubject.complete();
    this.loadingSubject.complete();
    this.countSubject.complete();
  }


  loadTodos(pageNumber = 0, pageSize = 35) {
    this.loadingSubject.next(true);
    let date = this.cookieService.get('historydate')
    this.newsRepo.getAllNewsbyDate(date, {page: pageNumber, size: pageSize}).subscribe(value => {
      this.todoSubject.next(value.content);
      console.log('----------------TableDataSource----LOAD NEWS--------------')
      console.log(value.content)
      this.countSubject.next(value.totalElements);
    })
  }

}
