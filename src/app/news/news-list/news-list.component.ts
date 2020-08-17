import {Component, Input, OnInit} from '@angular/core';
import {NewsRepo} from "../../../repo/repo/NewsRepo";
import {News} from "../../../repo/model/News";
import {Subject} from "rxjs";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor(private  newsRepo: NewsRepo) {
  }

  @Input() code: string
  @Input() month: string
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};

  news: News[];

  ngOnInit() {

    this.newsRepo.getNewsCodebyMonth(this.code, this.month).subscribe(value1 => {
      console.log(value1);
      this.news = value1
      this.dtTrigger.next()

    })
    this.dtOptions = {
      pageLength: 30,
      autoWidth: true,
      pagingType: 'full_numbers',
      order: [[2, 'desc']],
      dom: 'Bfrtip',
      buttons: [
        'columnsToggle',
        'colvis',
      ]

    }

  }

}
