import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { PermissionService } from '../services/permission.service';
import { PermissionHelper } from '../services/permission-helper.service';

@Directive({
    selector: '[hasPermission]'
})
export class HasPermissionDirective implements OnInit {
    @Input('hasPermission') permissions: Array<string>;
    @Input('onAuthorizedPermission') onAuthorized: string | Function;
    @Input('onUnauthorizedPermission') onUnauthorized: Function;
    subscription: any;

    constructor(private _elem: ElementRef, private _permissionService: PermissionService, private _helper: PermissionHelper) { }

    ngOnInit() {
        this.subscription = this._permissionService.permissionStoreChangeEmitter
            .subscribe(() => {
                this.applyPermission();
            });

        this.applyPermission();
    }

    applyPermission() {
        let hasDefined = this._permissionService.hasOneDefined(this.permissions);

        if (!hasDefined) {
            if (typeof this.onUnauthorized === "function")
                this.onUnauthorized(this._elem);
            else if (typeof this.onUnauthorized === "string")
                this._helper.ApplyStrategie(this.onUnauthorized, this._elem)
            else
                this._elem.nativeElement.style.display = 'none';
        }
        else {
            if (typeof this.onAuthorized === "function")
                this.onAuthorized(this._elem);
            else if (typeof this.onAuthorized === "string")
                this._helper.ApplyStrategie(this.onAuthorized, this._elem);
            else
                this._elem.nativeElement.style.display = 'inherit';
        }
    }


}