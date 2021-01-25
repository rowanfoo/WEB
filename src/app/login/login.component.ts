import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserRepo} from "../../repo/repo/UserRepo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  username: string
  password: string
  // username = ''
  // password = ''


  // constructor(public username: string, public password: string) {
  // }
  // @ViewChild('myname', {static: false}) input: ElementRef;
  @ViewChild('myname') input: ElementRef;

  constructor(private user: UserRepo, private router: Router) {
  }

  ngOnInit() {
    // this.input.nativeElement.value = ' IS THIS WORKING '
    console.log('-------------LOGIN----------');
    // console.log(this.input);
    //
    // this.input.nativeElement.innerText = ''
  }

  ngAfterViewInit() {
    console.log('-------------AFTER INIT----------');
    console.log(this.input);

  }

  submitLogin() {
    console.log('-------------LOGIN----------');
    console.log(this.username);
    console.log(this.password);
    this.user.loaduser(this.username).subscribe(
      (data) => {
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data))
        this.input.nativeElement.innerText = "SUCCESS LOGIN"

//        this.input.nativeElement.innerText = "SUCCESS LOGIN"
        this.router.navigate(['/algo']);

      },
      (err) => {
        console.log('==========ERRoR=========');
        console.log(err.message);
        console.log(err.toString());

        this.input.nativeElement.innerText = err.message

      }
    )


  }

}

