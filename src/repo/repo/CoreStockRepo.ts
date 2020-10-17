import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {CoreStock} from "../model/CoreStock";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()

export class CoreStockRepo {

  constructor(private http: HttpClient) {
  }


  getAllCodes(): Observable<CoreStock[]> {
    console.log('---------getDataDate-------');
    var url = Config.algoturl + 'stocks';
    return this.http.get<CoreStock[]>(url);
  }


  getCode(code: string): Observable<CoreStock> {
    var url = Config.algoturl + 'stocks/stock/' + code

    console.log('---------getCode-------' + url);
    return this.http.get<CoreStock>(url).pipe(
      map(value => {
        console.log(value);
        return value
      })
    );
  }

  save(stock: CoreStock) {
    var url = Config.algoturl + 'stocks';
    return this.http.put<any>(url, stock);
  }


}



