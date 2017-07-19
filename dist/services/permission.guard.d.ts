import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PermissionService } from './permission.service';
export declare class PermissionGuard implements CanActivate {
    private _permissionService;
    private router;
    constructor(_permissionService: PermissionService, router: Router);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
}
