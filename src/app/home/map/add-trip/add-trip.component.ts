import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { TriptrapService } from 'src/app/services/triptrap.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent implements AfterViewInit {

  Trips$ = this.triptrapService.Trips$;
  @ViewChild("tripName") tripName!: ElementRef;
  @ViewChild("tripStartDate") tripStartDate!: ElementRef;
  @ViewChild("tripEndDate") tripEndDate!: ElementRef;

  constructor(
    private triptrapService: TriptrapService,
    private _bottomSheetRef: MatBottomSheetRef
  ) {  }

  saveTrip() {
    const updatedTrips = this.Trips$.value;
    updatedTrips.push({
      name: this.tripName.nativeElement.value,
      date: this.tripStartDate.nativeElement.value + "-" + this.tripEndDate.nativeElement.value,
      photo: "assets/trip-photo.png",
      tripPlaces: []
    })
    this.Trips$.next(updatedTrips);
    this._bottomSheetRef.dismiss();
    console.log(this.tripEndDate)
  }

  ngAfterViewInit() {

  }

}
