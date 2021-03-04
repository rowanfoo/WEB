import {Component, Input, OnInit} from '@angular/core';


import * as Highcharts from 'highcharts';
import {CoreDataRepo} from "../../../repo/repo/CoreDataRepo";
import {HighchartSmallOption} from "../../../etc/HighchartSmallOption";
import {fngetClosePrice} from "../../../etc/CoreDataFunction";
import {fnlastyear, fnthreeyear, fntwoyear} from "../../../etc/datetimefunctions";


@Component({
  selector: 'app-tinychart',
  templateUrl: './tinychart.component.html',
  styleUrls: ['./tinychart.component.css']
})
export class TinychartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions
  @Input() code: string
  width: string
  height: string
  @Input() size: string

  @Input() year: string

  constructor(private  core: CoreDataRepo, private highChartOption: HighchartSmallOption) {
  }

  ngOnInit() {

    // let code = 'BHP.AX'

    if (this.size == null) {
      this.width = "300px"
      this.height = "300px"
    } else if (this.size == 'tiny') {
      this.width = "220px"
      this.height = "150px"
    } else {
      this.width = "1100px"
      this.height = "1100px"
    }

    console.log('------------------TinychartComponent-----SIZE---' + this.width + '------------' + this.height)

    let myyear = ''

    console.log('------------------TinychartComponent-----YEAR---' + this.year)
    if (this.year == null) {
      myyear = fnlastyear()
    } else if (this.year == '2') {
      myyear = fntwoyear()

    } else {
      myyear = fnthreeyear()

    }

    console.log('------------------TinychartComponent-----v1---' + this.code + ' ------  ' + myyear)
    // this.core.getDataChart(this.code, "2020-01-01").subscribe(value1 => {
    //   let seriesOptions = fngetClosePrice(value1);
    //   this.chartOptions = this.highChartOption.createOption(seriesOptions, this.code)
    //
    // })
    this.core.getDataChart(this.code, myyear).subscribe(value1 => {
      let seriesOptions = fngetClosePrice(value1);
      this.chartOptions = this.highChartOption.createOption(seriesOptions, this.code)
      this.chartOptions.rangeSelector.enabled = false
    })

  }


}
