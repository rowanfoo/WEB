import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {Injectable} from "@angular/core";
import {Fundamental} from "../model/Fundamental";
import {map} from "rxjs/operators";

@Injectable()
export class FundamentalRepo {

  constructor(private http: HttpClient) {
  }

  getFundamentalCode(code: string): Observable<Fundamental> {
    let fundurl = Config.fundamentalurl + "/all/" + code;
    console.log('--------Fundamental-------------getFundamentalCode----------' + fundurl);
    return this.http.get(fundurl).pipe(
      map(value => {
        console.log(value)
        return value[0]
      })
    )
  }

  saveFundamental(category: Fundamental) {
    let fundurl = Config.fundamentalurl
    return this.http.put(fundurl, category)
  }

}
