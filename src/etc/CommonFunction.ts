import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class CommonFunction {


  constructor(private  cookieService: CookieService) {
  }

  fngetDate(): string {
    let date = this.cookieService.get('historydate')

    if (this.cookieService.get('historyweek') != null || this.cookieService.get('historyweek') != '') {
      date = this.cookieService.get('historyweek')
    }

    if (date == 'Invalid date' || date == null || date == '') {
      date = ''
    }
    console.log('----------------CommonFunction----fngetDatae-------------' + date)

    return date
  }

}
