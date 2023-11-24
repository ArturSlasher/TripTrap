import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TriptrapService } from 'src/app/services/triptrap.service';
import { Location } from 'src/app/interfaces/location.interface';
import { LocationPickerComponent } from 'src/app/location-picker/location-picker.component';

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.scss']
})
export class AddPlanningComponent {

  @ViewChild("startPoint") startPoint!: ElementRef;
  @ViewChild("endPoint") endPoint!: ElementRef;
  startPointLocation: Location = {lat: 0, lng: 0};
  endPointLocation: Location = {lat: 0, lng: 0};
  startPointText = "";
  endPointText = "";

  Planning$ = this.triptrapService.Planning$;

  constructor(
    private triptrapService: TriptrapService,
    private _bottomSheetRef: MatBottomSheetRef,
    public dialog: MatDialog
  ) {  }

  pickStartPoint() {
    const dialogRef = this.dialog.open(LocationPickerComponent, {
      minWidth: '300px',
      data: {

      }
    });
    dialogRef.afterClosed().subscribe((result: Location) => {
      if (result) {
        this.startPointLocation = result;
        this.startPointText = this.startPointLocation.lat + ", " + this.startPointLocation.lng;
      }

    });
  }

  pickEndPoint() {
    console.log("test")
    const dialogRef = this.dialog.open(LocationPickerComponent, {
      minWidth: '300px',
      data: {

      }
    });
    dialogRef.afterClosed().subscribe((result: Location) => {
      if (result) {
        this.endPointLocation = result;
        this.endPointText = this.endPointLocation.lat + ", " + this.endPointLocation.lng;
      }
    });
  }

  savePlanning() {
    console.log(this.startPoint.nativeElement.value, this.endPoint.nativeElement.value)
    this.triptrapService.drawPlanning(
      this.startPointLocation,
      this.endPointLocation
    )
    this._bottomSheetRef.dismiss();
  }
}
