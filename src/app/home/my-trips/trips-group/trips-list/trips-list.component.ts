import { TriptrapService } from './../../../../services/triptrap.service';
import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip-card.interface';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  constructor(
    private triptrapService: TriptrapService
    ) { }

  ngOnInit(): void {
  }

  sendTrip(tripCard: Trip) {
    this.triptrapService.getTrip(tripCard);
    document.documentElement.scrollTop = 0;
  }

  TripCards: Trip[] = this.triptrapService.getTripCards();

}
