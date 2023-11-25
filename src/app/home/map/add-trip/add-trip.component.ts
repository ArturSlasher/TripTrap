import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ImagePickerConf } from 'ngp-image-picker';
import { Trip } from 'src/app/interfaces/trip.interface';
import { TriptrapService } from 'src/app/services/triptrap.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent {

  Trips$ = this.triptrapService.Trips$;
  @ViewChild("tripName") tripName!: ElementRef;
  @ViewChild("tripStartDate") tripStartDate!: ElementRef;
  @ViewChild("tripEndDate") tripEndDate!: ElementRef;
  @ViewChild('imagePicker', { static: false }) imagePicker: ElementRef | null | undefined = null;

  constructor(
    private triptrapService: TriptrapService,
    private _bottomSheetRef: MatBottomSheetRef
  ) {  }

  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    width: '30vw',
    height: '20vw'
  };

  imageSrc: string = 'assets/not-found-illustration.png';
  onImageChange(dataUri: any){
    this.imageSrc = dataUri;
  }

  saveTrip() {
    const newTrip: Trip = {
      name: this.tripName.nativeElement.value,
      date: this.tripStartDate.nativeElement.value + "-" + this.tripEndDate.nativeElement.value,
      photo: this.imageSrc,
      tripPlaces: []
    }
    const updatedTrips: Trip[] = this.Trips$.value;
    updatedTrips.unshift(newTrip);
    this.Trips$.next(updatedTrips);
    this.triptrapService.CurrentTrip$.next(newTrip);
    this._bottomSheetRef.dismiss();
  }

  ngAfterViewInit() {

  }

}
