import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./AuthService";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
//!!AUTHEN HERE ... if user is not login then  route to login page
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('-------AuthGuard--------CAN-ACTIVATE--------CAN LOGIN----');
    // remove auth for debug !!!
    //!!will try to check user ... if dont have then relay back to login page
    if (sessionStorage.getItem("user") == null) {
      console.log('---------------CAN-ACTIVATE------------');
      this.router.navigate(['/login']);

      return false;

    } else {
      console.log('---------------Ok good to go------------');
      return true;
    }
//    return true

  }

}
