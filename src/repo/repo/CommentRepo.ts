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


}
