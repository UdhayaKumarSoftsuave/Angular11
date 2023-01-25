import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AppGaurdService } from "./app.gaurd.service";

@Injectable()
export class AppGaurd  implements CanActivate ,CanActivateChild{

    constructor(private authService : AppGaurdService , private routes : Router){}
   
    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.isAuthendicated()
            .then((auth : boolean) => {
                if(auth){
                    return true;
                }else{
                    this.routes.navigate(['/']);
                    return false;
                }
                
            })
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute , state);
    }

}