import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';


export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree=> {

  return inject(AuthService).isAuthenticated()
    ? true
    : inject(Router).createUrlTree(['/login'])
;

};