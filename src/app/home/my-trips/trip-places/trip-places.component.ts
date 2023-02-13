import { Trip } from './../../../interfaces/trip-card.interface';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TriptrapService } from 'src/app/services/triptrap.service';
import { TripPlace } from 'src/app/interfaces/trip-place.interface';


@Component({
  selector: 'app-trip-places',
  templateUrl: './trip-places.component.html',
  styleUrls: ['./trip-places.component.scss']
})
export class TripContentSectionComponent implements OnInit {

  CurrentTrip$ = this.TriptrapService.CurrentTrip$;

  constructor(
    private TriptrapService: TriptrapService
  ) {
    window.onload = () => {
      const placeImage = document.getElementById("#test-image")!;
      const fullImage = document.getElementById("#full-image")!;
      const viewer = document.getElementById("#image-viewer")!;
      const close = document.getElementById("#endregionclose")!;

      placeImage.onclick = () => {
        fullImage.setAttribute("src", "https://www.w3schools.com/howto/img_fjords.jpg");
        viewer.style.display = 'block';
      };

      // this.placeImage.attr("src")
      // https://www.w3schools.com/howto/img_fjords.jpg

      close.onclick = () => {
        viewer.style.display = 'none';
      };
    }
  }


  ngOnInit(): void {

  }

}
