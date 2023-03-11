import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ImagePickerConf } from 'ngp-image-picker';
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
  @ViewChild('imagePicker', { static: false }) imagePicker: ElementRef | null | undefined = null;

  ngOnInit() {
  }

  imagePickerConf: ImagePickerConf = {
    borderRadius: '100vw',
    width: '20vw',
    height: '20vw'
  };

  imageSrc: string = '';
  onImageChange(dataUri: any){
    this.imageSrc = dataUri;
  }

  saveAccount(){
    if (this.User$.value != undefined){
      this.User$.next({
        id: this.User$.value.id,
        username: this.name.nativeElement.value,
        photo: this.imageSrc,
        address: this.address.nativeElement.value,
        bio: this.bio.nativeElement.value,
        Trips: this.User$.value.Trips
      })
      this._bottomSheetRef.dismiss();
    }
  }

}
