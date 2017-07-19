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
var PermissionService = (function () {
    function PermissionService() {
        this._permissionStore = [];
        this._permissionStoreChange = new core_1.EventEmitter();
    }
    PermissionService.prototype.define = function (permissions) {
        if (!Array.isArray(permissions))
            throw "permissions parameter is not array.";
        this.clearStore();
        for (var _i = 0, permissions_1 = permissions; _i < permissions_1.length; _i++) {
            var permission = permissions_1[_i];
            this.add(permission);
        }
    };
    PermissionService.prototype.add = function (permission) {
        if (typeof permission === "string" && !this.hasDefined(permission.toLocaleLowerCase())) {
            this._permissionStore.push(permission.toLocaleLowerCase());
            this._permissionStoreChange.emit(null);
        }
    };
    PermissionService.prototype.remove = function (permission) {
        if (typeof permission !== "string")
            return;
        var index = this._permissionStore.indexOf(permission.toLowerCase());
        if (index < 0)
            return;
        this._permissionStore.splice(index, 1);
        this._permissionStoreChange.emit(null);
    };
    PermissionService.prototype.hasDefined = function (permission) {
        if (typeof permission !== "string")
            return false;
        var index = this._permissionStore.indexOf(permission.toLowerCase());
        return index > -1;
    };
    PermissionService.prototype.hasOneDefined = function (permissions) {
        var _this = this;
        if (!Array.isArray(permissions))
            throw "permissions parameter is not array.";
        return permissions.some(function (v) {
            if (typeof v === "string")
                return _this._permissionStore.indexOf(v.toLowerCase()) >= 0;
        });
    };
    PermissionService.prototype.clearStore = function () {
        this._permissionStore = [];
    };
    Object.defineProperty(PermissionService.prototype, "store", {
        get: function () {
            return this._permissionStore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionService.prototype, "permissionStoreChangeEmitter", {
        get: function () {
            return this._permissionStoreChange;
        },
        enumerable: true,
        configurable: true
    });
    PermissionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PermissionService);
    return PermissionService;
}());
exports.PermissionService = PermissionService;
//# sourceMappingURL=permission.service.js.map