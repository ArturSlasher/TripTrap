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
    // this.placeImage = document.querySelector("#test-image")!;
    // this.fullImage = document.querySelector("#full-image")!;
    // this.viewer = document.querySelector("#image-viewer")!;
    // this.close = document.querySelector(".close")!;

    window.onload = () => {
      const placeImage = document.querySelector("#test-image")!;
      const fullImage = document.querySelector("#full-image")!;
      const viewer = document.querySelector("#image-viewer")!;
      const close = document.querySelector(".close")!;

      console.log(placeImage)

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
