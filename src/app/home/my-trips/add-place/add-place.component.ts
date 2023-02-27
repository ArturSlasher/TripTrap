import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TriptrapService } from 'src/app/services/triptrap.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss']
})
export class AddPlaceComponent implements OnInit {

  CurrentTrip$ = this.triptrapService.CurrentTrip$;
  @ViewChild("placeName") placeName!: ElementRef;
  @ViewChild("placeLocation") placeLocation!: ElementRef;
  @ViewChild("placeDate") placeDate!: ElementRef;
  @ViewChild("placeTime") placeTime!: ElementRef;
  @ViewChild("placeDescription") placeDescription!: ElementRef;

  constructor(
    private triptrapService: TriptrapService,
    private _bottomSheetRef: MatBottomSheetRef
  ) { }

  ngOnInit(): void {
  }

  savePlace() {
    const updatedCurrentTrip = this.CurrentTrip$.value;
    updatedCurrentTrip.tripPlaces.unshift({
      name: this.placeName.nativeElement.value,
      location: this.placeLocation.nativeElement.value,
      date: this.placeDate.nativeElement.value,
      time: this.placeTime.nativeElement.value,
      description: this.placeDescription.nativeElement.value,
      photos: []
    })
    this.CurrentTrip$.next(updatedCurrentTrip);
    this._bottomSheetRef.dismiss();
  }

}
