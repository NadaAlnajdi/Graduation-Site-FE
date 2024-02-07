import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class OwnerGuard implements CanActivate {
  user: any = {};
  constructor(private AuthService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const ownerList = [23434, 61255, 42634, 54356, 76235];
    this.user = JSON.parse(localStorage.getItem('user'));

    if (ownerList.includes(this.user.ownerId)) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
