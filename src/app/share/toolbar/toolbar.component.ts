import {Component, OnInit} from '@angular/core';
import * as moment from "moment";
import {CookieService} from "ngx-cookie-service";
import {fnlastweek, fnthisweek, fnthreeyear, fntwoyear} from "../../../etc/datetimefunctions";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  date: String
  thisweek: String
  lastweek: String
  twoweek: String


  constructor(private  cookieService: CookieService) {
  }

  ngOnInit() {
    let mydate = this.cookieService.get('historydate')
    this.date = (mydate) ? mydate : ''
    console.log('----ToolbarComponent--ngOnInit--' + this.cookieService.get('lastweek'))
    this.lastweek = this.cookieService.get('lastweek')
    this.thisweek = this.cookieService.get('thisweek')

    console.log('----ToolbarComponent--ngOnInit--' + fntwoyear())
    console.log('----ToolbarComponent--ngOnInit--' + fnthreeyear())

  }


  EndDateChange(event) {
    console.log('----EndDateChange----')
    this.cookieService.set('historydate', moment(event.value).format('YYYY-MM-DD'), 0.02)
    console.log('----EndDateChange--SET--' + this.cookieService.get('historydate'))
  }


  FieldsChangethisweek(event) {
    console.log('----FieldsChange----' + event.target.checked)
    if (event.target.checked) {
      this.cookieService.set('thisweek', "true", 0.02)
      this.cookieService.set('lastweek', '', 0.02)
      this.cookieService.set('historyweek', fnthisweek()[0] + ',' + fnthisweek()[1], 0.02)
      this.lastweek = ''
    } else {
      this.cookieService.set('thisweek', '', 0.02)
      this.cookieService.set('historyweek', '', 0.02)
    }

    this.date = ''
    //  console.log('----FieldsChange--SET--' + this.cookieService.get('historythisweek'))
  }


  FieldsChangelastweek(event) {
    console.log('----FieldsChange----' + event.target.checked)
    if (event.target.checked) {
      this.thisweek = ''
      this.cookieService.set('lastweek', "true", 0.02)
      this.cookieService.set('thisweek', '', 0.02)
      this.cookieService.set('historyweek', fnlastweek()[0] + ',' + fnlastweek()[1], 0.02)
    } else {
      console.log('----FieldsChangelastweek--UNSET--')
      this.cookieService.set('lastweek', '', 0.02)
      this.cookieService.set('historyweek', '', 0.02)
    }

    this.date = ''
    //  console.log('----FieldsChange--SET--' + this.cookieService.get('historythisweek'))
  }


}
