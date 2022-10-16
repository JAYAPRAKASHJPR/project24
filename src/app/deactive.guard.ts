import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DeactivateComponent } from './deactivate/deactivate.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<DeactivateComponent> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return window.confirm('are you sure you want to exit?');
  }
  
}
export class canLoad implements CanLoad {
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return true;
  }

}