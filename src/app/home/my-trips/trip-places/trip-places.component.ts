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

  @ViewChild("test-image") placeImage!: HTMLElement;
  @ViewChild("full-image") fullImage!: HTMLElement;
  @ViewChild("image-viewer") viewer!: HTMLElement;
  @ViewChild("close") close!: HTMLElement;

  constructor(
    private TriptrapService: TriptrapService
  ) { }

  ngAfterViewInit() {
      console.log(this.placeImage)

      this.placeImage.onclick = () => {
        this.fullImage.setAttribute("src", "https://www.w3schools.com/howto/img_fjords.jpg");
        this.viewer.style.display = 'block';
      };

      this.close.onclick = () => {
        this.viewer.style.display = 'none';
      };
  }
}
