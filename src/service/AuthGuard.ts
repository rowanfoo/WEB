import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./AuthService";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('---------------CAN-ACTIVATE------------');
    // remove auth for debug !!!
    // if (sessionStorage.getItem("user") == null) {
    //   console.log('---------------CAN-ACTIVATE------------');
    //   this.router.navigate(['/login']);
    //
    //   return false;
    //
    // } else {
    //   console.log('---------------Ok good to go------------');
    //   return true;
    // }
    return true

  }

}
