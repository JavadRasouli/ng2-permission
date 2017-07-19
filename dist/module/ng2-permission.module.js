"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var has_permission_directive_1 = require("../directives/has-permission.directive");
var except_permission_directive_1 = require("../directives/except-permission.directive");
var permission_service_1 = require("../services/permission.service");
var permission_guard_1 = require("../services/permission.guard");
var permission_helper_service_1 = require("../services/permission-helper.service");
var Ng2Permission = (function () {
    function Ng2Permission() {
    }
    Ng2Permission = __decorate([
        core_1.NgModule({
            declarations: [has_permission_directive_1.HasPermissionDirective, except_permission_directive_1.ExceptPermissionDirective],
            imports: [],
            exports: [has_permission_directive_1.HasPermissionDirective, except_permission_directive_1.ExceptPermissionDirective],
            providers: [permission_service_1.PermissionService, permission_guard_1.PermissionGuard, permission_helper_service_1.PermissionHelper],
        })
    ], Ng2Permission);
    return Ng2Permission;
}());
exports.Ng2Permission = Ng2Permission;
//# sourceMappingURL=ng2-permission.module.js.map