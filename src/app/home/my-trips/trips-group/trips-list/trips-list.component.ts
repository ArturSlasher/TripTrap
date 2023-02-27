import { TriptrapService } from './../../../../services/triptrap.service';
import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip.interface';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  Trips$ = this.triptrapService.Trips$;

  constructor(
    private triptrapService: TriptrapService
    ) { }

  ngOnInit(): void {
  }

  sendTrip(trip: Trip) {
    this.triptrapService.CurrentTrip$.next(trip)
    document.documentElement.scrollTop = 0;
  }

}
