import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class PermissionHelper {
    constructor() { }

    public ApplyStrategie(strategie: string, element: ElementRef) {
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
    }
}