import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TriptrapService } from './triptrap.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public triptrapService: TriptrapService,
    public router: Router
    ) { }

  canActivate(): boolean {
    if (!this.triptrapService.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
