import {Component, OnInit} from '@angular/core';
import {CoreDataRepo} from "../../repo/repo/CoreDataRepo";

declare var JSTestChart: any

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PLAYComponent implements OnInit {

  constructor(private  core: CoreDataRepo) {
  }

  chartid: string[] = []

  ngOnInit() {

    let code = 'BHP.AX'

    console.log('------------------ChartStockComponent--------' + code)
//     let chart = code + '-' + "2020-01-01"
//     this.chartid.push(chart)
//     this.core.getDataChart(code, "2020-01-01").subscribe(value1 => {
// //      JSTestChart(value1)
//       //  JSTestChart(value1)
//     })

    JSTestChart()
  }

}
