import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WishListRepo} from "../../../repo/repo/WishListRepo";
import {Subject} from "rxjs";
import {WishlistDetail} from "../../../repo/model/WishlistDetail";

@Component({
  selector: 'app-wishlistdetail',
  templateUrl: './wishlistdetail.component.html',
  styleUrls: ['./wishlistdetail.component.css']
})
export class WishlistdetailComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  wishlistDetail: WishlistDetail[]
  dtOptions: any = {};

  constructor(private router: Router, private wishlistrepo: WishListRepo, private  route: ActivatedRoute) {
  }


  ngOnInit() {
    let mycode = this.route.snapshot.params['code'];

    this.wishlistrepo.getWishlistDetail(mycode).subscribe(value1 => {
      console.log(value1);
      this.wishlistDetail = value1
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
