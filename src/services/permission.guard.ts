import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IPermissionGuardModel } from '../model/permission-guard.model';
import { PermissionService } from './permission.service';

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(private _permissionService: PermissionService,private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let data = route.data["Permission"] as IPermissionGuardModel;

        if (Array.isArray(data.Only) && Array.isArray(data.Except))
            throw "can't use both 'Only' and 'Except' in route data.";

        if (Array.isArray(data.Only))
        {
            let hasDefined = this._permissionService.hasOneDefined(data.Only)
            if (hasDefined)
                return true;

            if (data.RedirectTo && data.RedirectTo !== undefined)
                this.router.navigate([data.RedirectTo]);

            return false;
        }

        if (Array.isArray(data.Except)) {
            let hasDefined = this._permissionService.hasOneDefined(data.Except)
            if (!hasDefined)
                return true;

            if (data.RedirectTo && data.RedirectTo !== undefined)
                this.router.navigate([data.RedirectTo]);

            return false;
        }
    }
}
