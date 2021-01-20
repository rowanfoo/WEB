import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bigchartmag',
  templateUrl: './bigchartmag.component.html',
  styleUrls: ['./bigchartmag.component.css']
})
export class BigchartmagComponent implements OnInit {

  constructor(private route: Router) {
  }

  code: string

  ngOnInit() {
  }

  goClick(data) {
    this.route.navigate(['algo/bigchart/' + data.value + '/5']);
  }


}
