import { Component, OnInit } from '@angular/core';
import { HomeCard } from './home-card.interface';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss']
})
export class HomeCardsComponent implements OnInit {

  private HomeCards: HomeCard[] = [
    {
      name: 'Trip to the island',
      description: 'Noord, Aruba',
      date: '4/21/12',
      photo: "some photo"
    },
    {
      name: 'Wonderful Ukraine',
      description: 'Bukovel, Ukraine',
      date: '7/11/19',
      photo: "some photo"
    },
    {
      name: 'Winter weekend',
      description: 'Berlin, Germany',
      date: '2/11/12',
      photo: "some photo"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
