import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ImagePickerConf } from 'ngp-image-picker';
import { BehaviorSubject } from 'rxjs';
import { TriptrapService } from 'src/app/services/triptrap.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Location } from 'src/app/interfaces/location.interface';
import { LocationPickerComponent } from 'src/app/location-picker/location-picker.component';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss']
})
export class AddPlaceComponent implements OnInit {

  CurrentTrip$ = this.triptrapService.CurrentTrip$;
  placeAdded$ = this.triptrapService.placeAdded$;
  @ViewChild("placeName") placeName!: ElementRef;
  @ViewChild("placeLocation") placeLocation!: ElementRef;
  @ViewChild("placeDate") placeDate!: ElementRef;
  @ViewChild("placeTime") placeTime!: ElementRef;
  @ViewChild("placeDescription") placeDescription!: ElementRef;
  @ViewChild('addPhoto') addPhotoButton!: ElementRef;
  @ViewChild('imagePicker', { static: false }) imagePicker: ElementRef | null | undefined = null;
  photos: string[] = [];
  location: Location = {lat: 0, lng: 0};
  locationText: string = "";

  constructor(
    private triptrapService: TriptrapService,
    private _bottomSheetRef: MatBottomSheetRef,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  pickLocation() {
    const dialogRef = this.dialog.open(LocationPickerComponent, {
      minWidth: '300px',
      data: {
        zoom: 3
      }
    });
    dialogRef.afterClosed().subscribe((result: Location) => {
      if (result) {
        this.location = result;
        this.locationText = this.location.lat + ", " + this.location.lng;
      }
    });
  }

  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    width: '30vw',
    height: '20vw'
  };

  onImageChange(dataUri: any){
    this.photos.push(dataUri);
  }

  imageCount$ = new BehaviorSubject<number[]>([1])
  addExtraPhoto(){
    // element.innerHTML = '<ngp-image-picker #imagePicker [_config]="imagePickerConf" ($imageChanged)="onImageChange($event)"></ngp-image-picker>';
    const updatedImageCount = this.imageCount$.value;
    this.imageCount$.value.push(this.imageCount$.value.length+1);
    this.imageCount$.next(updatedImageCount);
  }

  savePlace() {
    const updatedCurrentTrip = this.CurrentTrip$.value;
    updatedCurrentTrip.tripPlaces.unshift({
      name: this.placeName.nativeElement.value,
      location: this.location,
      date: this.placeDate.nativeElement.value,
      time: this.placeTime.nativeElement.value,
      description: this.placeDescription.nativeElement.value,
      photos: this.photos
    })
    this.CurrentTrip$.next(updatedCurrentTrip);
    this.placeAdded$.next(true);
    this._bottomSheetRef.dismiss();
  }
}
