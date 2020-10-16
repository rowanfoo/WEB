import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {map} from "rxjs/operators";
import {WishlistDetail} from "../model/WishlistDetail";

@Injectable()
export class WishListRepo {

  constructor(private http: HttpClient) {
  }


  getWishlistDetailDate(codes: string, date: string): Observable<WishlistDetail[]> {
    let url = Config.algoturl + 'wishlist/metadata/' + codes
    url = (date) ? url + '?date=' + date : url
    console.log('---------getWishlistDetail-------' + url)

    return this.http.get<WishlistDetail[]>(url).pipe(
      map(value => {
        console.log(value)
        return value
      })
    )
  }


  // getWishlistDetail(codes: string): Observable<WishlistDetail[]> {
  //   //getData(): Observable<CoreData[]> {
  //   console.log('---------getWishlistDetail-------' + codes)
  //   let url = Config.algoturl
  //   url = url + 'wishlist/metadata/' + codes
  //   console.log('---------getWishlistDetail-------' + url)
  //
  //   return this.http.get<WishlistDetail[]>(url).pipe(
  //     map(value => {
  //       console.log(value)
  //       return value
  //     })
  //   )
  // }


}

//getWishlistDetail-------http://rowanfoo.ddns.net:10100/NaNFBU.AX,PGH.AX,AMP.AX,FSF.AX,MYX.AX,BAP.AX,CMW.AX,BIN.AX,FLT.AX
