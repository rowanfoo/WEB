import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class BaseRepo {


  constructor(public  http: HttpClient) {
  }


}
