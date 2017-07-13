# Managing permissions

## Overview

* [Defining permissions](#defining-permissions)
* [Add permission](#add-permission)
* [Has defined permission](#has-defined-permission)
* [Has one defined](#has-one-defined)
* [Removing permissions](#removing-permissions)
* [Retrieving permission definitions](#retrieving-permission-definitions)

## Defining permissions

```typescript
import { PermissionService } from 'angular2-permission';
[...]

constructor(private _permissionService: PermissionService) { 
  this._permissionService.define(['ViewUsers', 'CreateUser', 'EditUser', 'DeleteUser']);
}
```

## Add permission

```typescript
import { PermissionService } from 'angular2-permission';
[...]

constructor(private _permissionService: PermissionService) { 
  this._permissionService.add('ViewUsers');
}
```

## Has defined permission

```typescript
import { PermissionService } from 'angular2-permission';
[...]

constructor(private _permissionService: PermissionService) { 
  this._permissionService.hasDefined('ViewUsers'); // true or false
}
```

## Has one defined

```typescript
import { PermissionService } from 'angular2-permission';
[...]

constructor(private _permissionService: PermissionService) { 
  this._permissionService.hasOneDefined(['ViewUsers', 'CreateUser']); // return true or flase
}

```

## Removing permissions

You can easily remove all permissions form the PermPermissionStore.

```typescript
import { PermissionService } from 'angular2-permission';
[...]

constructor(private _permissionService: PermissionService) { 
  this._permissionService.clearStore(); 
}
```

Alternatively you can use remove to delete defined permissions manually:

```typescript
import { PermissionService } from 'angular2-permission';
[...]

constructor(private _permissionService: PermissionService) { 
  this._permissionService.remove('ViewUsers');
}
```

## Retrieving permission definitions

to get all user permissions use property store:

```typescript
import { PermissionService } from 'angular2-permission';
[...]

constructor(private _permissionService: PermissionService) { 
  this._permissionService.store; 
}

```

## License

[`MIT`](./LICENSE.md)
