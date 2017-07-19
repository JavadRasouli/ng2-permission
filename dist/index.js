"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_permission_directive_1 = require("./directives/has-permission.directive");
exports.HasPermissionDirective = has_permission_directive_1.HasPermissionDirective;
var except_permission_directive_1 = require("./directives/except-permission.directive");
exports.ExceptPermissionDirective = except_permission_directive_1.ExceptPermissionDirective;
var permission_service_1 = require("./services/permission.service");
exports.PermissionService = permission_service_1.PermissionService;
var permission_guard_1 = require("./services/permission.guard");
exports.PermissionGuard = permission_guard_1.PermissionGuard;
var ng2_permission_module_1 = require("./module/ng2-permission.module");
exports.Ng2Permission = ng2_permission_module_1.Ng2Permission;
//# sourceMappingURL=index.js.map