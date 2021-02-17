import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {Injectable} from "@angular/core";
import {Comments} from "../model/Comment";
import {tap} from "rxjs/internal/operators/tap";

@Injectable()
export class TrackerRepo {

  constructor(private http: HttpClient) {
  }

  gettracker(id: string): Observable<Comments[]> {
    let commenturl = Config.trackerurl + '/' + id;
    console.log('---TrackerRepo-   getid-----1--' + commenturl);
    return this.http.get<Comments[]>(commenturl).pipe(tap(x => {
      console.log(x)
    }));
  }

  deletecode(id: string, code: string) {
    let commenturl = Config.trackerurl + '/code/' + code + '/' + id
    // console.log('---Deletee-----1--' + commenturl + '/code' + code +'/'+id);
    console.log('---Deletee--TrackerRepo---1--' + commenturl);

    this.http.delete(commenturl).subscribe(value => {
      console.log(value)
    })
  }


  getcode(id: string, code: string): Observable<Comments[]> {
    let commenturl = Config.trackerurl + '/code/' + code + '/' + id
    console.log('---TrackerRepo-   getid-----1--' + commenturl);
    return this.http.get<Comments[]>(commenturl).pipe(tap(x => {
      console.log(x)
    }));
  }


}
