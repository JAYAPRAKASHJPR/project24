
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,
        CanActivateChild, CanDeactivate, Resolve,
         RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {DeactivateComponent} from './deactivate/deactivate.component'

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }  
}

export class childGuard implements CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  return false;
  }
}

export class DataResolvers implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     return {sno:1, name:"jayaprakash"}
  }
}

