import { NgModule } from '@angular/core';
import { HasPermissionDirective } from '../directives/has-permission.directive';
import { ExceptPermissionDirective } from '../directives/except-permission.directive';
import { PermissionService } from '../services/permission.service';
import { PermissionGuard } from '../services/permission.guard';
import { PermissionHelper } from '../services/permission-helper.service';

@NgModule({
    declarations: [HasPermissionDirective, ExceptPermissionDirective],
    imports: [],
    exports: [HasPermissionDirective, ExceptPermissionDirective],
    providers: [],
})
export class Ng2Permission {
    static forRoot() {
        return {
            ngModule: Ng2Permission,
            providers: [PermissionService, PermissionGuard, PermissionHelper]
        }
    }
}
