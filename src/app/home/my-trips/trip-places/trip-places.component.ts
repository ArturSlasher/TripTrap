import { Trip } from '../../../interfaces/trip.interface';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TriptrapService } from 'src/app/services/triptrap.service';
import { TripPlace } from 'src/app/interfaces/trip-place.interface';


@Component({
  selector: 'app-trip-places',
  templateUrl: './trip-places.component.html',
  styleUrls: ['./trip-places.component.scss']
})
export class TripContentSectionComponent implements AfterViewInit {

  CurrentTrip$ = this.TriptrapService.CurrentTrip$;

  @ViewChild("placeimage") placeImage!: ElementRef;
  @ViewChild("fullimage") fullImage!: ElementRef;
  @ViewChild("imageviewer") viewer!: ElementRef;

  viewImage(){ }
  closeImage(){ }

  constructor(
    private TriptrapService: TriptrapService
  ) { }

  ngAfterViewInit() {

    this.viewImage = () => {
      this.viewer.nativeElement.style.display = 'block';
    };

    this.closeImage = () => {
      this.viewer.nativeElement.style.display = 'none';
    };
  }
}
