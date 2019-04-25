import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

    constructor() { }

    canActivate(): boolean {
        return localStorage.getItem('isLoggedIn') ? true : false;
    }
}