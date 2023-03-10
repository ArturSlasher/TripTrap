import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TriptrapService } from 'src/app/services/triptrap.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  constructor(
    public triptrapService: TriptrapService,
    private _bottomSheetRef: MatBottomSheetRef
  ) { }

  User$ = this.triptrapService.User$;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('address') address!: ElementRef;
  @ViewChild('bio') bio!: ElementRef;

  ngOnInit() {
  }

  saveAccount(){
    if (this.User$.value != undefined){
      this.User$.next({
        id: this.User$.value.id,
        username: this.name.nativeElement.value,
        photo: this.User$.value.photo,
        address: this.address.nativeElement.value,
        bio: this.bio.nativeElement.value,
        Trips: this.User$.value.Trips
      })
      this._bottomSheetRef.dismiss();
    }
  }

}
