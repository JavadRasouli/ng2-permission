import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { PermissionService } from '../services/permission.service';
import { PermissionHelper } from '../services/permission-helper.service';

@Directive({
    selector: '[exceptPermission]'
})
export class ExceptPermissionDirective implements OnInit {
    @Input('exceptPermission') exceptPermission: Array<string>;
    @Input('onAuthorizedPermission') onAuthorized: Function;
    @Input('onUnauthorizedPermission') onUnauthorized: Function;

    constructor(private _elem: ElementRef, private _permissionService: PermissionService, private _helper: PermissionHelper) { }

    ngOnInit() {
        this._permissionService.permissionStoreChangeEmitter
            .subscribe(() => {
                this.applyPermission();
            });

        this.applyPermission();
    }

    applyPermission() {
        let hasDefined = this._permissionService.hasOneDefined(this.exceptPermission);

        if (hasDefined) {
            if (typeof this.onAuthorized === "function")
                this.onAuthorized(this._elem);
            else if (typeof this.onAuthorized === "string")
                this._helper.ApplyStrategie(this.onAuthorized, this._elem)
            else
                this._elem.nativeElement.style.display = 'none';
        }
        else {
            if (typeof this.onUnauthorized === "function")
                this.onUnauthorized(this._elem);
            else if (typeof this.onUnauthorized === "string")
                this._helper.ApplyStrategie(this.onUnauthorized, this._elem);
            else
                this._elem.nativeElement.style.display = '';
        }
    }
}