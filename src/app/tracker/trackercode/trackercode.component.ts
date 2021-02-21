import {Component, OnInit} from '@angular/core';
import {BigChart} from "../../../repo/model/BigChart";
import {ActivatedRoute} from "@angular/router";
import {TrackerRepo} from "../../../repo/repo/TrackerRepo";
import {Comments} from "../../../repo/model/Comment";

@Component({
  selector: 'app-trackercode',
  templateUrl: './trackercode.component.html',
  styleUrls: ['./trackercode.component.css']
})
export class TrackercodeComponent implements OnInit {

  bigcharts: BigChart
  comments: Comments[]
  width: string
  height: string
  load = false;
  toggle = true
  code: string
  period: string

  constructor(private trackerRepo: TrackerRepo, private  route: ActivatedRoute) {
  }

  ngOnInit() {
    this.load = true
    if (this.route.snapshot.params['code'] != null) {
      this.period = 'SHORT'
    }
    this.code = this.route.snapshot.params['code']
    this.period = this.route.snapshot.params['period']

    console.log('----------TrackercodeComponent----------' + this.route.snapshot.params['code'] + '-------------' + this.period)

    this.trackerRepo.getcodeperiod('rowan', this.code, this.period).subscribe(value => {
      console.log(value);
      this.load = false
      this.comments = value
    })
    //
    // if (this.period == 'SHORT') {
    //   this.trackerRepo.getcode('rowan', this.code).subscribe(value => {
    //     console.log(value);
    //     this.load = false
    //     this.comments = value
    //   })
    // } else {
    //   this.trackerRepo.getcodeperiod('rowan', this.code, 'LONG').subscribe(value => {
    //     console.log(value);
    //     this.load = false
    //     this.comments = value
    //   })
    // }
  }
}

