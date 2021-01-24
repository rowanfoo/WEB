import {Component, OnInit} from '@angular/core';
import {BigChart} from "../../../repo/model/BigChart";
import {BigChartRepo} from "../../../repo/repo/BigChartRepo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bigchartcompare',
  templateUrl: './bigchartcompare.component.html',
  styleUrls: ['./bigchartcompare.component.css']
})
export class BigchartcompareComponent implements OnInit {
  bigcharts: BigChart
  bigchartcompare: BigChart[]
  width: string
  load = false;


  constructor(private bigChartRepo: BigChartRepo, private  route: ActivatedRoute) {
  }

  ngOnInit() {

    if (this.route.snapshot.params['code'] != null) {
      this.bigcharts = new BigChart()
      this.bigcharts.year = this.route.snapshot.params['year'];
      this.bigcharts.mode = this.route.snapshot.params['mode'];
      this.bigcharts.ma = this.route.snapshot.params['ma'];
      this.bigcharts.code = this.route.snapshot.params['code'];
    } else {
      this.bigcharts = new BigChart()
      this.bigcharts.year = "1"
      this.bigcharts.code = ""
      this.bigcharts.mode = "daily"
      this.bigcharts.ma = "50"

    }
    this.width = "800"
  }


  submitLogin() {
    console.log(this.bigcharts)
    console.log(this.bigcharts.year)

    this.bigChartRepo.getcompareimages(this.bigcharts).subscribe(value => {
      console.log(value);
      this.load = true
      this.bigchartcompare = value
    })

    this.load = false

  }
}
