import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-displaychart',
  templateUrl: './displaychart.component.html',
  styleUrls: ['./displaychart.component.css']
})
export class DisplaychartComponent implements OnInit {
  @Input() codes: string;

  constructor(private route: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

// try BIGCHART Viewer
  list() {
    console.log(' --------DisplaychartComponent--list---------------')
    console.log(this.codes)

    this.route.navigate(["algo/minichart/" + this.codes]);
    this.route.navigate([this.activeRoute.parent.routeConfig.path + "/minichart/" + this.codes]);

    //   this.route.navigate(["algo/bigchartcompare/" + this.codes + '/1/daily/50']);
  }

// try BIGCHART Viewer
  intervalstk() {
    console.log(' --------DisplaychartComponent--intervalstk---------------')
    // this.route.navigate(["algo/intervalchart/" + this.codes]);
    this.route.navigate([this.activeRoute.parent.routeConfig.path + "/bigchartinterval/" + this.codes]);

  }


}
