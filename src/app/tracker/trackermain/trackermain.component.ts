import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-trackermain',
  templateUrl: './trackermain.component.html',
  styleUrls: ['./trackermain.component.css']
})
export class TrackermainComponent implements OnInit {

  constructor(private route: Router) {
  }


  ngOnInit() {
  }

  create() {
    this.route.navigate(["tracker/create"]);
  }

  chart() {
    this.route.navigate(["tracker/chart"]);
  }

  list() {
    this.route.navigate(["tracker/list"]);

  }

}



