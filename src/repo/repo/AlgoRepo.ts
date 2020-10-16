import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {TechStr} from "../model/TechStr";


@Injectable()
export class AlgoRepo {
  constructor(private http: HttpClient) {
  }


  getData(type: string, id: string): Observable<TechStr[]> {

    let url = Config.algoturl + type + '/' + id + '?sector=300'
    console.log('---------AlgoRepo-------' + url)
    return this.http.get<TechStr[]>(url)


  }

  getAlgo(id: string, date: String): Observable<TechStr[]> {

    let url = Config.algoturl + 'algo' + '/' + id
    url = (date) ? url + '?date=' + date : url
    console.log('---------AlgoRepo-------' + url)

    return this.http.get<TechStr[]>(url)


  }


}
