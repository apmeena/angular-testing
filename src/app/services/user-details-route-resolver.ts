import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user-service.service';

@Injectable()
export class UserResolver implements Resolve<any> {
  constructor(private _userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
      return this._userService.getUserById(route.paramMap.get('id'));
  }
}