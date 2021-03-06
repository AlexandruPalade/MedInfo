import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/core/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(

  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.length === 0) {
      this.router.navigate(["/auth/login"]);
      return false;
    }
    return true;
  }
}
