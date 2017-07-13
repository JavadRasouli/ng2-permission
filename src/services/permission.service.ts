import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PermissionService {
    private _permissionStore: Array<string> = [];
    private _permissionStoreChange: EventEmitter<any> = new EventEmitter();

    constructor() {
        
    }

    public define(permissions: Array<string>): void {
        if (!Array.isArray(permissions))
            throw "permissions parameter is not array.";

        for (let permission of permissions)
            this.add(permission);
    }

    public add(permission: string): void {
        this._permissionStore.push(permission);
        this._permissionStoreChange.emit(null);
    }

    public remove(permission: string): void {
        let index = this._permissionStore.indexOf(permission);
        if (index < 0)
            return;

        this._permissionStore.splice(index, 1);
        this._permissionStoreChange.emit(null);
    }

    public hasDefined(permission: string): boolean {
        let index = this._permissionStore.indexOf(permission);
        return index > -1;
    }

    public hasOneDefined(permissions: Array<string>): boolean {
        if (!Array.isArray(permissions))
            throw "permissions parameter is not array.";

        return permissions.some(v => {
            return this._permissionStore.indexOf(v) >= 0;
        });
    }

    public clearStore(): void {
        this._permissionStore = [];
    }

    get store(): Array<string> {
        return this._permissionStore;
    }

    get permissionStoreChangeEmitter() {
        return this._permissionStoreChange;
    }
}
