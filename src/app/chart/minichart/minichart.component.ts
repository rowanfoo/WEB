import {Component, OnInit} from '@angular/core';
import {CoreDataRepo} from "../../../repo/repo/CoreDataRepo";
import {ActivatedRoute} from "@angular/router";

declare var JSCreateChartMini: any

@Component({
  selector: 'app-minichart',
  templateUrl: './minichart.component.html',
  styleUrls: ['./minichart.component.css']
})
export class MinichartComponent implements OnInit {

  constructor(private  core: CoreDataRepo, private  route: ActivatedRoute) {
  }

  chartid: string[] = []

  // ngOnInit() {
  //   let code = this.route.snapshot.params['code'];
  //   let asxcodes: string[] = code.split(',')
  //   let count = 0
  //   let mycode: string
  //
  //
  //   asxcodes.forEach(value => {
  //
  //     console.log('------------------MinichartComponent--------' + value)
  //     let data = this.core.getDataChart(value, '2009-01-01')
  //
  //
  //     let contid = 'container' + (count++)
  //     console.log('------------------MinichartComponent----CONT----' + contid)
  //
  //     this.chartid.push(contid)
  //     JSCreateChartMini(data, contid, code)
  //     //container
  //     //JSCreateChartMini(data, 'container', code)
  //
  //   })
  // }

  ngOnInit() {
    let code = this.route.snapshot.params['code'];
    let asxcodes: string[] = code.split(',')
    let count = 0
    let mycode: string

    this.chartid = asxcodes

    asxcodes.forEach(value => {

      console.log('------------------MinichartComponent--------' + value)
      this.core.getDataChart(value, '2009-01-01').subscribe(value1 => {

        let contid = value
        console.log('------------------MinichartComponent----CONT----' + contid)

        this.chartid.push(contid)
        console.log(value1)
        JSCreateChartMini(value1, contid, contid)
        //JSCreateChartMini(value1, "BHP", code)

      })


      //container
      //JSCreateChartMini(data, 'container', code)

    })
  }


  // private createChartX(code: string) {
  //   console.log('-----------CREATE CHART------------' + code)
  //
  //   let seriesOptions = [];
  //   this.core.getData(code, '2009-01-01').subscribe(
  //     (data) => {
  //       console.log('-----------SERIES------------' + data.length)
  //       data.forEach(value => {
  //         seriesOptions.push([
  //           new Date(value.date).getTime(), // the date
  //           value.open, // open
  //           value.high, // high
  //           value.low, // low
  //           value.close// close
  //         ]);
  //       });
  //       JSCreateChartMini(seriesOptions, 'container', code)
  //
  //     }
  //   );
  //
  // }

}
