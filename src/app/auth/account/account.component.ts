import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TriptrapService } from 'src/app/services/triptrap.service';
import { EditAccountComponent } from './edit-account/edit-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  constructor(
    private _bottomSheet: MatBottomSheet,
    public triptrapService: TriptrapService
  ) {
    console.log(this.triptrapService.User$.value)
  }

  openBottomSheet(): void {
    this._bottomSheet.open(EditAccountComponent);
  }

  User$ = this.triptrapService.User$;

  logout(){
    this.triptrapService.isLoggedIn = false;
  }

}
