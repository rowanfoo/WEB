import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WishlistDetail} from "../model/WishlistDetail";
import {Config} from "../../share/Config";
import {map} from "rxjs/operators";
import {tap} from "rxjs/internal/operators/tap";

@Injectable()
export class CategoryRepo {

  constructor(private http: HttpClient) {
  }


  getWishlistDetail(codes: string): Observable<WishlistDetail[]> {
    //getData(): Observable<CoreData[]> {
    console.log('---------getWishlistDetail-------' + codes)
    let url = Config.algoturl
    url = url + 'wishlist/metadata/' + codes
    console.log('---------getWishlistDetail-------' + url)

    return this.http.get<WishlistDetail[]>(url).pipe(
      map(value => {
        console.log(value)
        return value
      })
    )


  }


  getCategoryTagStocks(category, tag): Observable<string[]> {
    let categoryurl = Config.categoryurl + '/stock/category/' + category + '/tag/' + tag;
    console.log('---RUN-   getCategoryTagStocks-----1--' + categoryurl);
    return this.http.get<string[]>(categoryurl).pipe(
      tap(value => {
        console.log(value)
        return value
      })
    )

  }

  getAllCategoryTag(tag): Observable<string[]> {
    let categoryurl = Config.categoryurl + '/tag/' + tag;

    return this.http.get<string[]>(categoryurl).pipe(
      tap(value => {
        console.log(value)
        return value
      })
    )

  }

  getAllCategory(): Observable<string[]> {
    var categoryurl = Config.categoryurl;
    console.log('---RUN-   getAllCategory-----1--' + categoryurl);
    return this.http.get<string[]>(categoryurl).pipe(
      tap(value => {
        console.log(value)
        return value
      })
    )

  }

}
