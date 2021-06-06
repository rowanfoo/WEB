import {Component, Input, OnInit} from '@angular/core';
import {NewsRepo} from "../../../repo/repo/NewsRepo";
import {News} from "../../../repo/model/News";

@Component({
  selector: 'app-news-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  @Input() code: string
  news: News[];

  constructor(private  newsRepo: NewsRepo) {
  }


  ngOnInit() {
    console.log("---AppWeekComponent-----" + this.code)
    this.newsRepo.getNewsCodebyWeek(this.code).subscribe(value1 => {
      console.log(value1);
      this.news = value1
    })
  }

}
