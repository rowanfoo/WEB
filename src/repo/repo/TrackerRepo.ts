import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {Injectable} from "@angular/core";
import {BigChart} from "../model/BigChart";
import {map} from "rxjs/operators";

@Injectable()
export class BigChartRepo {

  constructor(private http: HttpClient) {
  }


}
