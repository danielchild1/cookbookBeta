import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        if(UserService.isAuthenticated()){
            return true
        }
        this.router.navigate(["/signin"])
        return false;
    }
}