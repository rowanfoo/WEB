import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WishListRepo} from "../../../repo/repo/WishListRepo";
import {Subject} from "rxjs";
import {WishlistDetail} from "../../../repo/model/WishlistDetail";
import {CookieService} from "ngx-cookie-service";

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
  codes: string

  constructor(private router: Router, private wishlistrepo: WishListRepo, private  route: ActivatedRoute, private  cookieService: CookieService) {
  }

  ngOnInit() {
    console.log('------------------------WishlistdetailComponent-----------------------')

    let mycode = this.route.snapshot.params['code'];
    this.codes = mycode
    let date = this.cookieService.get('historydate')

    this.wishlistrepo.getWishlistDetailDate(mycode, date).subscribe(value1 => {
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

  private randomchart(code: string) {
    this.router.navigate(['algo/bigchart/' + code + '/1'])
  }

}


// constructor(private  cookieService: CookieService) {
// }
//
// ngOnInit() {
// }
//
// EndDateChange(event) {
//
//   console.log('----EndDateChange----')
// //    console.log(event.value.toString('YYYY-MM-dd'))
// //    console.log(new Date(event.value).toString('YYYY-MM-dd'))
//   console.log(new Date(event.value).toDateString())
//   console.log(new Date(event.value).toISOString())
//   console.log(StringUtility.getDate(new Date(event.value)))
//   console.log(moment(event.value).format('YYYY-MM-DD'))
//   this.cookieService.set('historydate', moment(event.value).format('YYYY-MM-DD'), 0.02)
//
//
// }
