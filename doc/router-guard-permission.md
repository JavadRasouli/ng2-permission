# Router guard permission

## Before start

Make sure you are familiar with:

[Managing permissions](managing-permissions)

## PermissionGuard

You can use ```PermissionGuard``` from ```Ng2Permission``` module, protecting routes.
this flowing example all permission except ```GuestUser``` can access to ```users``` path.
whene ```GuestUser``` asked ```user``` path, redirect to ```403```.

```typescript
import { PermissionGuard, IPermissionGuardModel } from 'angular2-permission';

const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent,
        canActivate: [PermissionGuard],
        data: {
            Permission: {
                Except: ['GuestUser'],
                RedirectTo: '403'
            } as IPermissionGuardModel
        },
        children: []
    },
    {
        path: 'users/create',
        component: UserCreateComponent,
        canActivate: [PermissionGuard],
        data: {
            Permission: {
                Only: ['CreateUser'],
                RedirectTo: '403'
            } as IPermissionGuardModel
        },
        children: []
    },
    {
        path: '403',
        component: AccessDeniedComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

```

## License

[`MIT`](./LICENSE.md)