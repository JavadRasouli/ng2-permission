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
var PermissionHelper = (function () {
    function PermissionHelper() {
    }
    PermissionHelper.prototype.ApplyStrategie = function (strategie, element) {
        switch (strategie) {
            case "enable":
                element.nativeElement.removeAttribute("disabled");
                break;
            case "disable":
                element.nativeElement.setAttribute("disabled", "true");
                break;
            case "show":
                element.nativeElement.style.display = 'inherit';
                break;
            case "hide":
                element.nativeElement.style.display = 'none';
                break;
            default:
                throw "onUnauthorized attribute is function or one of this items: <enable, disable, show, hide>";
        }
    };
    PermissionHelper = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PermissionHelper);
    return PermissionHelper;
}());
exports.PermissionHelper = PermissionHelper;
//# sourceMappingURL=permission-helper.service.js.map