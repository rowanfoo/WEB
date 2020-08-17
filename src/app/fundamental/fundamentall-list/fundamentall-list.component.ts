import {Component, Input, OnInit} from '@angular/core';
import {Fundamental} from "../../../repo/model/Fundamental";
import {Subject} from "rxjs";
import {FundamentalRepo} from "../../../repo/repo/FundamentalRepo";

@Component({
  selector: 'app-fundamental-list',
  templateUrl: './fundamentall-list.component.html',
  styleUrls: ['./fundamental-list.component.css']
})
export class FundamentallListComponent implements OnInit {

  constructor(private fundamentalRepo: FundamentalRepo) {
  }

  data: Fundamental = new Fundamental
  ('', '', 0, 0, 0, 0, 0, 0, 0, '', 0)

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @Input() code: string


  ngOnInit() {


    this.fundamentalRepo.getFundamentalCode(this.code).subscribe(value => {
      this.data = value
      console.log(this.data);
      this.dtTrigger.next()

    })

    this.dtOptions = {
      pageLength: 5,
      autoWidth: true,
      pagingType: 'full_numbers',
      order: [[4, 'desc']]
    }


  }

}
