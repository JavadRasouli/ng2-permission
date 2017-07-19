import { OnInit, ElementRef } from '@angular/core';
import { PermissionService } from '../services/permission.service';
import { PermissionHelper } from '../services/permission-helper.service';
export declare class HasPermissionDirective implements OnInit {
    private _elem;
    private _permissionService;
    private _helper;
    permissions: Array<string>;
    onAuthorized: string | Function;
    onUnauthorized: Function;
    subscription: any;
    constructor(_elem: ElementRef, _permissionService: PermissionService, _helper: PermissionHelper);
    ngOnInit(): void;
    applyPermission(): void;
}
