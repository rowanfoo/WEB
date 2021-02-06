import {Component, OnInit} from '@angular/core';
import {BigChart} from "../../../repo/model/BigChart";
import {BigChartRepo} from "../../../repo/repo/BigChartRepo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-trackerchartlist',
  templateUrl: './trackerchartlist.component.html',
  styleUrls: ['./trackerchartlist.component.css']
})
// export class TrackerchartlistComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

export class TrackerchartlistComponent implements OnInit {
  bigcharts: BigChart
  bigchartcompare: BigChart[]
  width: string
  load = false;
  toggle = true


  constructor(private bigChartRepo: BigChartRepo, private  route: ActivatedRoute) {
  }

  ngOnInit() {
    this.load = true

    let codes: string[] = this.route.snapshot.params['codes'].split(',')
    // let bigchart: BigChart[] = []

    // codes.forEach(code => {
    //   let bigcharts = new BigChart()
    //   bigcharts.year = "1"
    //   bigcharts.code = code
    //   bigcharts.mode = "daily"
    //   bigcharts.ma = "50"
    //   bigchart.push(bigcharts)
    // })

    codes.forEach(value => {
      this.bigChartRepo.getimage(value).subscribe(value => {
        console.log(value);
        this.load = false
        this.bigchartcompare.push(value)


      })

    })


    this.width = "1200"


  }


  resize() {
    if (this.toggle) {
      this.width = "200"
      this.toggle = false
    } else {
      this.width = "1200"
      this.toggle = true
    }

  }
}
