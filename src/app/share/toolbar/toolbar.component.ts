import {Component, OnInit} from '@angular/core';
import * as moment from "moment";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  date: String

  constructor(private  cookieService: CookieService) {
  }

  ngOnInit() {
    let mydate = this.cookieService.get('historydate')
    this.date = (mydate) ? mydate : ''
  }

  EndDateChange(event) {

    console.log('----EndDateChange----')
    this.cookieService.set('historydate', moment(event.value).format('YYYY-MM-DD'), 0.02)
    console.log('----EndDateChange--SET--' + this.cookieService.get('historydate'))
  }

}
