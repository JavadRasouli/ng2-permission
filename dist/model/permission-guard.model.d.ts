export interface IPermissionGuardModel {
    Only?: Array<string>;
    Except?: Array<string>;
    RedirectTo?: string | Function;
}
