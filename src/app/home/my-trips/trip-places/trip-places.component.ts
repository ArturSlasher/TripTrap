import { Trip } from './../../../interfaces/trip-card.interface';
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

  @ViewChild("testimage") placeImage!: ElementRef;
  @ViewChild("fullimage") fullImage!: ElementRef;
  @ViewChild("imageviewer") viewer!: ElementRef;
  @ViewChild("close") close!: ElementRef;

  constructor(
    private TriptrapService: TriptrapService
  ) { }

  ngAfterViewInit() {

    this.placeImage.nativeElement.onclick = () => {
      console.log("click")
      this.viewer.nativeElement.style.display = 'block';
    };

    this.viewer.nativeElement.onclick = () => {
      this.viewer.nativeElement.style.display = 'none';
    };
  }
}
