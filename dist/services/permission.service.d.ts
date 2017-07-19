import { EventEmitter } from '@angular/core';
export declare class PermissionService {
    private _permissionStore;
    private _permissionStoreChange;
    constructor();
    define(permissions: Array<string>): void;
    add(permission: string): void;
    remove(permission: string): void;
    hasDefined(permission: string): boolean;
    hasOneDefined(permissions: Array<string>): boolean;
    clearStore(): void;
    readonly store: Array<string>;
    readonly permissionStoreChangeEmitter: EventEmitter<any>;
}
