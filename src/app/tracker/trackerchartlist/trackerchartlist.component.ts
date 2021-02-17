import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TrackerRepo} from "../../../repo/repo/TrackerRepo";
import {Comments} from "../../../repo/model/Comment";
import * as _ from 'underscore';

@Component({
  selector: 'app-trackerchartlist',
  templateUrl: './trackerchartlist.component.html',
  styleUrls: ['./trackerchartlist.component.css']
})

export class TrackerchartlistComponent implements OnInit {

  data: Comments[]
  codes: String[] = []
  code: string

  constructor(private trackerRepo: TrackerRepo, private router: Router) {
  }


  ngOnInit() {

    this.trackerRepo.gettracker('rowan').subscribe(value => {
      this.data = value

      this.data = _.filter(this.data,
        function (num) {
          return !num.is_reject
        });


      this.data = _.uniq(this.data, person => person.code);
      console.log(this.data)

      this.data.forEach(value1 => {
        this.codes.push(value1.code.substring(0, value1.code.indexOf('.')))
      })
      this.code = this.codes.join()
      this.router.navigate(["tracker/bigchartcompare/" + this.code + '/1/daily/50']);
    })


  }


}
