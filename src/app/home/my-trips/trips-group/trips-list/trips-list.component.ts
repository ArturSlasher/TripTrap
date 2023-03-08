import { TriptrapService } from './../../../../services/triptrap.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip.interface';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  Trips$ = this.triptrapService.Trips$;
  cards = document.getElementsByClassName('card-container');

  constructor(
    private triptrapService: TriptrapService
    ) { }

  ngOnInit(): void {
  }

  sendTrip(card: Element, trip: Trip) {
    this.triptrapService.CurrentTrip$.next(trip);
    for (var i = 0; i < this.cards.length; i++) {
      this.cards[i].classList.remove('active');
    }
    card.classList.add("active");
    document.documentElement.scrollTop = 0;
  }

}
