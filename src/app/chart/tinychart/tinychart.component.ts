import {Component, Input, OnInit} from '@angular/core';


import * as Highcharts from 'highcharts';
import {CoreDataRepo} from "../../../repo/repo/CoreDataRepo";
import {HighchartSmallOption} from "../../../etc/HighchartSmallOption";
import {fnlastyear, fnthreeyear, fntwoyear} from "../../../etc/datetimefunctions";
import {fngetClosePrice} from "../../../etc/CoreDataFunction";


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
  @Input() group: string

  // seriesOptions
  chartCallback
  chart;

  constructor(private  core: CoreDataRepo, private highChartOption: HighchartSmallOption) {
    console.log('----------TinychartComponent-------------')
    const self = this;
    this.chartCallback = chart => {
      // saving chart reference
      self.chart = chart;
      console.log(chart.title)
      console.log(chart.title.text)

      //  chart.title = {text: "New Title"}
      // chart.setTitle({text: "New Title"})

    };
  }


  ngOnInit() {

    // let code = 'BHP.AX'

    if (this.size == null) {
      this.width = "300px"
      this.height = "300px"
    } else if (this.size == 'tiny') {
      this.width = "220px"
      this.height = "180px"
    } else {
      this.width = "1100px"
      this.height = "1100px"
    }

//    console.log('------------------TinychartComponent-----SIZE---' + this.width + '------------' + this.height)

    let myyear = ''

    //  console.log('------------------TinychartComponent-----YEAR---' + this.year)
    if (this.year == null) {
      myyear = fnlastyear()
    } else if (this.year == '2') {
      myyear = fntwoyear()

    } else {
      myyear = fnthreeyear()

    }

    //console.log('------------------TinychartComponent-----v1x---' + this.code + ' ------  ' + myyear)
    // this.core.getDataChart(this.code, "2020-01-01").subscribe(value1 => {
    //   let seriesOptions = fngetClosePrice(value1);
    //   this.chartOptions = this.highChartOption.createOption(seriesOptions, this.code)
    //
    // })
    let mygroup = "day"
    if (this.group != null) {
      mygroup = this.group
    }

    this.core.getDataChart(this.code, myyear).subscribe(value1 => {
      let seriesOptions = fngetClosePrice(value1);
      let percent = this.getpercentage(value1)
      let mycode = this.code.substring(0, this.code.indexOf("."))

      let text = "<a href=\"https://bigcharts.marketwatch.com/advchart/frames/frames.asp?show=&insttype=&symb=AU%3A" + mycode + "&x=0&y=0&time=8&startdate=1%2F4%2F1999&enddate=6%2F27%2F2018&freq=1&compidx=aaaaa%3A0&comptemptext=&comp=none&ma=1&maval=50&uf=0&lf=268435456&lf2=2&lf3=0&type=2&style=320&size=4&timeFrameToggle=false&compareToToggle=false&indicatorsToggle=false&chartStyleToggle=false&state=11\" target=\"_blank\"><u>" + mycode + "</u></a>"

      console.log(text)
      this.chartOptions = this.highChartOption.createOption(seriesOptions, text, percent + '%', mygroup)
      this.chartOptions.rangeSelector.enabled = false
    })
  }


  private getpercentage(array): string {
    let today = array[array.length - 1][4]
    let yest = array[array.length - 2][4]

    let percent = ((today - yest) / yest) * 100
    let ans = Math.round(percent * 100) / 100
    return ans + ''
  }

}
