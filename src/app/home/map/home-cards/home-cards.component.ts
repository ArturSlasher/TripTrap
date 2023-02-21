import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip-card.interface';
import { TriptrapService } from 'src/app/services/triptrap.service';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss']
})
export class HomeCardsComponent implements OnInit {

  Trips: Trip[] = this.triptrapService.getTrips();

  constructor(
    private triptrapService: TriptrapService
  ) { }

  ngOnInit(): void {
  }

}
