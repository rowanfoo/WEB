import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-listtinychart',
  templateUrl: './listtinychart.component.html',
  styleUrls: ['./listtinychart.component.css']
})
export class ListtinychartComponent implements OnInit {

  constructor(private  route: ActivatedRoute) {
  }

  mycode: string[]

  ngOnInit(): void {
    // let code = 'BHP.AX,RIO.AX'
    // this.mycode = code.split(',')
    let code = this.route.snapshot.params['code'];
    this.mycode = code.split(',')
  }

}
