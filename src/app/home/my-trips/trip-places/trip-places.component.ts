import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TriptrapService } from 'src/app/services/triptrap.service';
import { Trip } from '../../../interfaces/trip.interface';
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
  ) { }

  ngOnInit(): void {
  }
}
