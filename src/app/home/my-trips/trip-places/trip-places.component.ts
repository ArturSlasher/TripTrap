import { Trip } from './../../../interfaces/trip-card.interface';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild("testimage") placeImage!: HTMLElement;
  @ViewChild("fullimage") fullImage!: HTMLElement;
  @ViewChild("imageviewer") viewer!: HTMLElement;
  @ViewChild("close") close!: HTMLElement;

  viewImage() { };

  constructor(
    private TriptrapService: TriptrapService
  ) { }

  ngAfterViewInit() {



    this.viewImage = () => {
      console.log(this.viewer)
      console.log("click")
      this.viewer.style.display = 'block';
    };

      // console.log(this.placeImage)

      // this.placeImage.onclick = () => {
      //   console.log("click")
      //   this.fullImage.setAttribute("src", "https://www.w3schools.com/howto/img_fjords.jpg");
      //   this.viewer.style.display = 'block';
      // };

      // this.close.onclick = () => {
      //   this.viewer.style.display = 'none';
      // };
  }
}
