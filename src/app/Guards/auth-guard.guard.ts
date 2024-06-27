import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isLoggedIn: BehaviorSubject<{ isLoggedIn: boolean, Role: string } | undefined>;

  constructor(private authService:AuthService){
    this.isLoggedIn = new BehaviorSubject<{ isLoggedIn: boolean, Role: string } | undefined>(undefined);
    this.GetCurrentUser()
  }


  GetCurrentUser() {
    return this.authService.getCureentUser().subscribe({
      next:(response:any)=>this.isLoggedIn.next({isLoggedIn:true,Role:response}),
      error:()=>this.isLoggedIn.next(undefined),
    }) ;
  }

  canActivate(
 route: ActivatedRouteSnapshot,
 state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
   if(this.isLoggedIn){
    let Role= this.isLoggedIn.value?.Role;
    console.log(Role)
    if(route.routeConfig?.path === Role){
      return true
    }
    if(route.routeConfig?.path?.includes("Techniciens") === Role){
      return true
    }
    if(route.routeConfig?.path === Role){
      return true
    }
  }
  return false
  }

}
