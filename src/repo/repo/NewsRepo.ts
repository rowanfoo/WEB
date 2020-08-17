import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {Injectable} from "@angular/core";
import {News} from "../model/News";
import {tap} from "rxjs/internal/operators/tap";

@Injectable()
export class NewsRepo {


  constructor(private http: HttpClient) {
  }


  getNewsCode(code: string): Observable<News[]> {
    let serverurl = Config.newsurl + '/code/' + code;
    console.log('-----------getNewsCode-----url------------' + serverurl);

    return this.http.get<News[]>(serverurl).pipe(
      tap(value => {
        console.log(value)
      })
    )
  }


  getNewsCodebyMonth(code: string, month: string): Observable<News[]> {
    let serverurl = Config.newsurl + '/code/' + code + '/month/' + month;
    console.log('-----------getNewsCodebyMonth-----url------------' + serverurl);

    return this.http.get<News[]>(serverurl).pipe(
      tap(value => {
        console.log(value)
      })
    )
  }


}
