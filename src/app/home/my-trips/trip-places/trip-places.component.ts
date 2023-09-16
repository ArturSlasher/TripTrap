import { Trip } from '../../../interfaces/trip.interface';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TriptrapService } from 'src/app/services/triptrap.service';
import { TripPlace } from 'src/app/interfaces/trip-place.interface';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@Component({
  selector: 'app-trip-places',
  templateUrl: './trip-places.component.html',
  styleUrls: ['./trip-places.component.scss']
})
export class TripContentSectionComponent implements AfterViewInit {

  Trips$ = this.TriptrapService.Trips$;
  CurrentTrip$ = this.TriptrapService.CurrentTrip$;

  constructor(
    private TriptrapService: TriptrapService,
    public dialog: Dialog
  ) { }

  openDialog(photo: string) {
    this.dialog.open(ImageDialogComponent, {
      minWidth: '300px',
      data: {
        placePhoto: photo
      }
    });
  }

  ngAfterViewInit() {
  }
}
