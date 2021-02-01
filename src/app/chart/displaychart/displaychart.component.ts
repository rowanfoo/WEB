import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-displaychart',
  templateUrl: './displaychart.component.html',
  styleUrls: ['./displaychart.component.css']
})
export class DisplaychartComponent implements OnInit {
  @Input() codes: string;

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  list() {
    console.log(' --------DisplaychartComponent--list---------------')
    this.route.navigate(["algo/minichart/" + this.codes]);
  }

// try BIGCHART Viewer
  intervalstk() {
    console.log(' --------DisplaychartComponent--intervalstk---------------')

    // this.route.navigate(["algo/intervalchart/" + this.codes]);
    this.route.navigate(["algo/bigchartinterval/" + this.codes]);
  }


}
