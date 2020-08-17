import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {CoreStock} from "../model/CoreStock";

export class CoreStockRepo {

  constructor(private http: HttpClient) {
  }


  getAllCodes(): Observable<CoreStock[]> {
    console.log('---------getDataDate-------');
    var url = Config.algoturl + 'stocks';
    return this.http.get<CoreStock[]>(url);
  }

}


