import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {WishlistSummaryRepo} from "../../../repo/repo/WishlistSummaryRepo";
import {WishlistSummary} from "../../../repo/model/WishlistSummary";

@Component({
  selector: 'app-wishlistsummary',
  templateUrl: './wishlistsummary.component.html',
  styleUrls: ['./wishlistsummary.component.css']
})
export class WishlistsummaryComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
  wishlistSummary: WishlistSummary[]
  dtOptions: any = {};

  constructor(private wishlistSummaryRepo: WishlistSummaryRepo) {
  }


  ngOnInit() {


    this.wishlistSummaryRepo.getWishlisSummary('rowan').subscribe(value1 => {
      console.log(value1);
      this.wishlistSummary = value1
      this.dtTrigger.next()
    })

    this.dtOptions = {
      pageLength: 30,
      autoWidth: true,
      pagingType: 'full_numbers',
      order: [[4, 'desc']],
      dom: 'Bfrtip',
      buttons: [
        'columnsToggle',
        'colvis',
      ]

    }

///////
  }

}
