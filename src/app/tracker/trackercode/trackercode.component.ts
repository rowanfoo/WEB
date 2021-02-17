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


  constructor(private trackerRepo: TrackerRepo, private  route: ActivatedRoute) {
  }

  ngOnInit() {
    this.load = true
    this.code = this.route.snapshot.params['code']
    console.log(this.route.snapshot.params['code'])

    this.trackerRepo.getcode('rowan', this.code).subscribe(value => {
      console.log(value);
      this.load = false
      this.comments = value
    })
    // this.width = "1200"
    // this.height = "100%"
  }
}
