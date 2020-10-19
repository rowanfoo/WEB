import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {Injectable} from "@angular/core";
import {News} from "../model/News";
import {tap} from "rxjs/internal/operators/tap";
import {Page} from "../model/Page";

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

  getAllNewsbyDate(date: String, request): Observable<Page<News>> {
    let serverurl = Config.algoturl + '/news/all';

    if (date != null && date.trim() != '') {
      request['date'] = date
    }

    console.log('-----------getAllNewsbyDate-----url------------' + serverurl);
    console.log('-----------getAllNewsbyDate-----date------------' + request);
    console.log(request);

    console.log(request);
    const params = request;

    return this.http.get<Page<News>>(serverurl, {params}).pipe(
      tap(value => {
        var content = value.content
        content.forEach(value1 => {
          value1.codex = value1.code.substring(0, value1.code.indexOf("."))
        })
        /// want PLS.AX to PLS , to show news

        console.log(value)
      })
    )
  }


}
