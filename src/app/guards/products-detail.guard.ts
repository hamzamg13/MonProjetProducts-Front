import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsDetailGuard implements CanActivate {
  constructor( private _route: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('****************** GUARD ACTIF ICI ****************');
    // this._route.navigateByUrl('/'); // Force le redirection vers Welcome
    return true;
  }
}
