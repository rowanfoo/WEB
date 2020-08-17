import {Component, OnInit} from '@angular/core';
import {CoreDataRepo} from "../../../repo/repo/CoreDataRepo";
import {ActivatedRoute} from "@angular/router";
import * as moment from "moment";

declare var JSMultiChart: any
declare var JSCreateChart: any

@Component({
  selector: 'app-chart-stock',
  templateUrl: './chart-stock.component.html',
  styleUrls: ['./chart-stock.component.css']
})
export class ChartStockComponent implements OnInit {

  constructor(private  core: CoreDataRepo, private  route: ActivatedRoute) {
  }

  chartid: string[] = []

  ngOnInit() {

    let year: string[] = [
      moment().subtract(1, 'years').format('YYYY-MM-DD').toString(),
      moment().subtract(3, 'years').format('YYYY-MM-DD').toString(),
    ]
    // const year1 = moment().subtract(1, 'years');
    // const year2 = moment().subtract(2, 'years');
    // const year3 = moment().subtract(3, 'years');
    // const year4 = moment().subtract(5, 'years');

    // console.log('-----------------ChartStockComponent----' + year1.format('YYYY-MM-DD'))
    // console.log('-----------------ChartStockComponent----' + year2.format('YYYY-MM-DD'))
    // console.log('-----------------ChartStockComponent----' + year3.format('YYYY-MM-DD'))

    let code = this.route.snapshot.params['code'];
    //let code = 'BHP.AX'

    console.log('------------------ChartStockComponent--------' + code)
    year.forEach(date => {
      let chart = code + '-' + date
      this.chartid.push(chart)
      this.core.getDataChart(code, date).subscribe(value1 => {
        // let mydate = []

//        console.log('------------------ChartStockComponent----CONT----' + chart)
        //      console.log(value1)
        //    console.log('-----' + value1.length)

        // value1.forEach(arr => {
        //   mydate.push(arr[0])
        // })

        //console.log(mydate)
//         JSMultiChart(value1, mydate, chart, chart)
        JSMultiChart(value1, chart, chart)
//        JSCreateChart(value1, chart, chart)

      })


    })


  }

}
