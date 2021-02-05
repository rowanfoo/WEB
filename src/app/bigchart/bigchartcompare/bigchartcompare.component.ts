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
  toggle = true


  constructor(private bigChartRepo: BigChartRepo, private  route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.params['code'] != null) {
      this.bigcharts = new BigChart()
      this.bigcharts.year = this.route.snapshot.params['year'];
      this.bigcharts.mode = this.route.snapshot.params['mode'];
      this.bigcharts.ma = this.route.snapshot.params['ma'];
      this.bigcharts.code = this.route.snapshot.params['code'];
      this.width = "600"
      this.submitLogin()
    } else {
      this.bigcharts = new BigChart()
      this.bigcharts.year = "1"
      this.bigcharts.code = ""
      this.bigcharts.mode = "daily"
      this.bigcharts.ma = "50"
      this.width = "1200"
    }
  }


  submitLogin() {
    console.log(this.bigcharts)
    this.load = true
    this.bigChartRepo.getcompareimages(this.bigcharts).subscribe(value => {
      console.log(value);
      this.bigchartcompare = value
      this.load = false
    })
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
