import {Component, OnDestroy, OnInit} from '@angular/core';
import {TechStr} from "../../../repo/model/TechStr";
import {AlgoRepo} from "../../../repo/repo/AlgoRepo";
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-algodatatable',
  templateUrl: './algodatatable.component.html',
  styleUrls: ['./algodatatable.component.css']
})


export class AlgodatatableComponent implements OnInit, OnDestroy {
  data: TechStr[]

  constructor(private algo: AlgoRepo, private  route: ActivatedRoute, private  cookieService: CookieService) {
  }

  chartdetail(vode: string) {
  }

  comment(code: string) {
  }

  detail(code: string) {

  }


  marketcap: string
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  codes: string

  ngOnInit() {
    console.log('------------------AlgodatatableComponent------------')
    let type = this.route.snapshot.params['type'];
    let value = this.route.snapshot.params['value'];
    let date = this.cookieService.get('historydate')

    console.log('------------------TableComponent------------' + type)
    console.log('------------------TableComponent------------' + value)
    console.log('------------------------AlgodatatableComponent-----------------------' + date)


//    this.algo.getData('rsi', '30<14')
    //this.algo.getData(type, value)
    this.algo.getAlgo(type, date)
      .subscribe(
        (data) => {

          /// this.marketcap = data[0].fundamental.martketcapAsstring
          //   let a = data[0].fundamental.martketcapAsstring
          // let b = data[0].fundamental.marketcap
          // let c = data[0].fundamental.shares
          //
          // console.log(this.marketcap);
          // console.log(b);
          // console.log(c);
          // console.log(data[0].fundamental)
          // console.log(data[0].fundamental.pe)
          // console.log(data[0].fundamental.code)
          // console.log(data[0].fundamental.date)
          // console.log(data[0].fundamental.year_high_date)
          // console.log(data[0].fundamental.market_cap)
          // console.log(data[0].fundamental.yearchange)
          // console.log(data[0].fundamental.annualYied)
          // // data.forEach(value1 => {
          //   console.log(value)
          // })
          console.log('------TEMP-------')
          this.data = data
          let temp: string = ""
          data.forEach(value1 => {
            temp = temp + value1.code + ","

            //   console.log(temp)
          })
          this.codes = temp.substring(0, temp.length - 1)

          this.dtTrigger.next()
        }
      )

    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   order: [[5, "desc"]]
    // };


    this.dtOptions = {
      pageLength: 20,
      autoWidth: true,
      pagingType: 'full_numbers',
      order: [[4, 'desc']]
    }


  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}



