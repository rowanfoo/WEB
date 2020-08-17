import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-share-summary',
  templateUrl: './share-summary.component.html',
  styleUrls: ['./share-summary.component.css']
})
export class ShareSummaryComponent implements OnInit {

  constructor(private  route: ActivatedRoute) {
  }

  @Input() mycode: string
  code: string

  ngOnInit() {

//    this.code = this.mycode;
    this.code = this.route.snapshot.params['code'];

  }

}


