"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var permission_service_1 = require("../services/permission.service");
var permission_helper_service_1 = require("../services/permission-helper.service");
var HasPermissionDirective = (function () {
    function HasPermissionDirective(_elem, _permissionService, _helper) {
        this._elem = _elem;
        this._permissionService = _permissionService;
        this._helper = _helper;
    }
    HasPermissionDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._permissionService.permissionStoreChangeEmitter
            .subscribe(function () {
            _this.applyPermission();
        });
        this.applyPermission();
    };
    HasPermissionDirective.prototype.applyPermission = function () {
        var hasDefined = this._permissionService.hasOneDefined(this.permissions);
        if (!hasDefined) {
            if (typeof this.onUnauthorized === "function")
                this.onUnauthorized(this._elem);
            else if (typeof this.onUnauthorized === "string")
                this._helper.ApplyStrategie(this.onUnauthorized, this._elem);
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
    };
    __decorate([
        core_1.Input('hasPermission'),
        __metadata("design:type", Array)
    ], HasPermissionDirective.prototype, "permissions", void 0);
    __decorate([
        core_1.Input('onAuthorizedPermission'),
        __metadata("design:type", Object)
    ], HasPermissionDirective.prototype, "onAuthorized", void 0);
    __decorate([
        core_1.Input('onUnauthorizedPermission'),
        __metadata("design:type", Function)
    ], HasPermissionDirective.prototype, "onUnauthorized", void 0);
    HasPermissionDirective = __decorate([
        core_1.Directive({
            selector: '[hasPermission]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, permission_service_1.PermissionService, permission_helper_service_1.PermissionHelper])
    ], HasPermissionDirective);
    return HasPermissionDirective;
}());
exports.HasPermissionDirective = HasPermissionDirective;
//# sourceMappingURL=has-permission.directive.js.map