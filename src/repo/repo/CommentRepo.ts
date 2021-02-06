import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {tap} from "rxjs/internal/operators/tap";
import {Injectable} from "@angular/core";
import {Comments} from "../model/Comment";

@Injectable()
export class CommentRepo {


  constructor(private http: HttpClient) {
  }


  getid(id: string): Observable<Comments> {
    let commenturl = Config.commenturl + '/' + id;
    console.log('---RUN-   getid-----1--' + commenturl);
    return this.http.get<Comments>(commenturl).pipe(tap(x => {
      console.log(x)
    }));
  }


  getAllIdeasbyUserid(userid: string): Observable<Comments[]> {
    let commenturl = Config.commenturl + '/idea/' + userid;
    console.log('---RUN-   getAllIdeasbyUserid-----1--' + commenturl);
    return this.http.get<Comments[]>(commenturl).pipe(tap(x => {
      console.log(x)
    }));
  }

  getAllCommentsbyUserid(userid: string): Observable<Comments[]> {
    let commenturl = Config.commenturl + '/userid/' + userid
    console.log('---RUN-   getAllCommentsbyUserid-----1--' + commenturl);
    return this.http.get<Comments[]>(commenturl).pipe(tap(x => {
      console.log(x)
    }));

  }

  getAllCommentbyType(userid: string): Observable<Comments[]> {
    let commenturl = Config.commenturl + '/all/' + userid;
    console.log('---RUN-   getAllCommentbyType-----1--' + commenturl);
    return this.http.get<Comments[]>(commenturl).pipe(tap(x => {
      console.log(x)
    }));

  }

  getAllCommentbyPeriod(userid: string, period: string): Observable<Comments[]> {
    let commenturl = Config.commenturl + '/userid/' + userid + '/period/' + period;
    console.log('---RUN-   getAllCommentbyPeriod-----1--' + commenturl);
    return this.http.get<Comments[]>(commenturl).pipe(tap(x => {
      console.log(x)
    }));

  }

  getAllCommentbyCode(code: string): Observable<Comments[]> {
    let commenturl = Config.commenturl + '/code/' + code;
    console.log('---RUN-   getAllCommentbyCode-----1--' + commenturl);
    return this.http.get<Comments[]>(commenturl).pipe(tap(x => {
      console.log(x)
    }));
  }

  saveComment(comment: Comments) {
    let commenturl = Config.commenturl;
    return this.http.put(commenturl, comment)
  }


  delete(codes: string) {
    let commenturl = Config.commenturl;
    console.log('---Deletee-----1--' + commenturl + '/' + codes);
    this.http.delete(commenturl + '/' + codes).subscribe(value => {
      console.log(value)
    })
    // var z = this.http.get(commenturl + '/' + codes)
    //console.log(z)
    //return z
  }


}
