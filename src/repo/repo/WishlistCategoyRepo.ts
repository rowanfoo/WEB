import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {map} from "rxjs/operators";
import {WishlistCategoy} from "../model/WishlistCategoy";
import {tap} from "rxjs/internal/operators/tap";
import {Injectable} from "@angular/core";

@Injectable()
export class WishlistCategoyRepo {

  constructor(private http: HttpClient) {
  }


  getAllCategory(): Observable<WishlistCategoy[]> {
    //getData(): Observable<CoreData[]> {
    console.log('---------getDataDate-------')

    let url = Config.wishurl
    let username: string = JSON.parse(sessionStorage.getItem("user")).username
    url = url + 'wishlist/wishlistcategorys/' + username
    console.log('---------getAllCategory-------' + url)
    // return this.http.get<WishlistCategoy[]>(url).pipe(
    //   map(value => {
    //     console.log(value)
    //     let arr : WishlistCategoy[] =[]
    //     // value.forEach(value1 =>{
    //     //   arr.push( new WishlistCategoy((value1)))
    //     // } )
    //     return value
    //   })
    // )
    return this.http.get<string[]>(url).pipe(
      map(value => {
        console.log(value)
        let arr: WishlistCategoy[] = []
        value.forEach(value1 => {
          arr.push(new WishlistCategoy((JSON.parse(value1).category)))
        })
        return arr
      })
    )


  }

/// Wrong should get with category and userid
  getCatetoryCodes(category: string): Observable<string[]> {
    let wishlisturl = Config.wishurl
    wishlisturl = wishlisturl + '/wishcategorycodes'
    console.log(wishlisturl)

    return this.http.get<string[]>(wishlisturl + '?category=' + category)
      .pipe(
        tap(value => {
          console.log(value)
        })
      )

  }

/// Wrong should get with category and userid
  updateCategory(category: { code: string, category: string }) {
    let wishlisturl = Config.wishurl
    wishlisturl = wishlisturl + 'wishlist'
    console.log('----------updateCategory------' + wishlisturl)
    return this.http.put(wishlisturl, category)

  }
}




