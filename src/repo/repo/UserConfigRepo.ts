import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {Injectable} from "@angular/core";
import {UserConfig} from "../model/UserConfig";

@Injectable()
export class UserConfigRepo {

  constructor(private http: HttpClient) {
  }


  getuserconfig(userid: string): Observable<UserConfig[]> {
    console.log('---------getuserconfig-------');
    let url = Config.algoturl + 'userconfig/' + userid
    console.log('---------getuserconfig-------' + url);
    return this.http.get<UserConfig[]>(url);
  }


  saveUserAlgo(algo: UserConfig) {
    // let username: string = JSON.parse(sessionStorage.getItem("user")).username
    // let userusrl = Config.userurl + 'user/algo/' + username;
    // console.log('-----saveUserAlgo----------' + userusrl)
    // return this.http.put(userusrl, algo)
  }


}


