import { OnInit, ElementRef } from '@angular/core';
import { PermissionService } from '../services/permission.service';
import { PermissionHelper } from '../services/permission-helper.service';
export declare class ExceptPermissionDirective implements OnInit {
    private _elem;
    private _permissionService;
    private _helper;
    exceptPermission: Array<string>;
    onAuthorized: Function;
    onUnauthorized: Function;
    constructor(_elem: ElementRef, _permissionService: PermissionService, _helper: PermissionHelper);
    ngOnInit(): void;
    applyPermission(): void;
}
