import { Component, OnInit } from '@angular/core';
import { TripCard } from './trip-card.interface';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  public TripCards: TripCard[] = [
    {
      name: 'Bukovel, Ukraine',
      date: '29/05/2021',
      photo: "some photo"
    },
    {
      name: 'New York, USA',
      date: '18/09/2016',
      photo: "some photo"
    },
    {
      name: 'Vancouver, Canada',
      date: '16/08/2013',
      photo: "some photo"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
