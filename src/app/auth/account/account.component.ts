import { Component } from '@angular/core';
import { TriptrapService } from 'src/app/services/triptrap.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  constructor(
    public triptrapService: TriptrapService
  ) {
    console.log(this.triptrapService.User$.value)
  }

  User$ = this.triptrapService.User$;

  logout(){
    this.triptrapService.isLoggedIn = false;
  }

}
