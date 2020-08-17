import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {WishlistSummary} from "../model/WishlistSummary";

@Injectable()
export class WishlistSummaryRepo {

  constructor(private http: HttpClient) {
  }


  getWishlisSummary(userid: string): Observable<WishlistSummary[]> {
    //getData(): Observable<CoreData[]> {
    let url = Config.algoturl
    url = url + 'wishlist/alldetails/' + userid
    console.log('---------getWishlisSummary-------' + url)

    return this.http.get<WishlistSummary[]>(url).pipe(
      map(value => {
        console.log(value)
        return value
      })
    )
  }
}
