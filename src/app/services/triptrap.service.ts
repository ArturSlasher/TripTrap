import { TripPlace } from './../interfaces/trip-place.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Trip } from '../interfaces/trip.interface';

@Injectable({
  providedIn: 'root'
})
export class TriptrapService {

  Trips$ = new BehaviorSubject<Trip[]>(
    [
      {
        name: 'Bukovel, Ukraine',
        date: '29/05/2021-29/06/2021',
        photo: "assets/trip-photo.png",
        tripPlaces: [
          {
            name: "Opera and Ballet Theatre",
            location: "Lviv, Svobody Avenue, 28",
            date: "9 June, 2021",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: [
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Lviv, Svobody Avenue, 28",
            date: "19 June, 2021",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Lviv, Svobody Avenue, 28",
            date: "29 June, 2021",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png"]
          }
        ]
      },
      {
        name: 'New York, USA',
        date: '18/09/2016-18/10/2016',
        photo: "assets/place-photo.png",
        tripPlaces: [
          {
            name: "Opera and Ballet Theatre",
            location: "New York, Svobody Avenue, 28",
            date: "9 June, 2020",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "New York, Svobody Avenue, 28",
            date: "9 June, 2020",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "New York, Svobody Avenue, 28",
            date: "9 June, 2020",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          }
        ]
      },
      {
        name: 'Vancouver, Canada',
        date: '16/08/2013-16/09/2013',
        photo: "assets/trip-photo.png",
        tripPlaces: [
          {
            name: "Opera and Ballet Theatre",
            location: "Vancouver, Svobody Avenue, 28",
            date: "9 June, 2019",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Vancouver, Svobody Avenue, 28",
            date: "9 June, 2019",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Vancouver, Svobody Avenue, 28",
            date: "9 June, 2019",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          }
        ]
      },
      {
        name: 'Bukovel, Ukraine',
        date: '29/05/2021-29/06/2021',
        photo: "assets/trip-photo.png",
        tripPlaces: [
          {
            name: "Opera and Ballet Theatre",
            location: "Lviv, Svobody Avenue, 28",
            date: "9 June, 2021",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: [
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png",
              "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Lviv, Svobody Avenue, 28",
            date: "19 June, 2021",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Lviv, Svobody Avenue, 28",
            date: "29 June, 2021",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png"]
          }
        ]
      },
      {
        name: 'New York, USA',
        date: '18/09/2016-18/10/2016',
        photo: "assets/place-photo.png",
        tripPlaces: [
          {
            name: "Opera and Ballet Theatre",
            location: "New York, Svobody Avenue, 28",
            date: "9 June, 2020",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "New York, Svobody Avenue, 28",
            date: "9 June, 2020",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "New York, Svobody Avenue, 28",
            date: "9 June, 2020",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          }
        ]
      },
      {
        name: 'Vancouver, Canada',
        date: '16/08/2013-16/09/2013',
        photo: "assets/trip-photo.png",
        tripPlaces: [
          {
            name: "Opera and Ballet Theatre",
            location: "Vancouver, Svobody Avenue, 28",
            date: "9 June, 2019",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Vancouver, Svobody Avenue, 28",
            date: "9 June, 2019",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Vancouver, Svobody Avenue, 28",
            date: "9 June, 2019",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          }
        ]
      }
    ]
  );

  CurrentTrip$ = new BehaviorSubject<Trip>(this.Trips$.value[0]);

  constructor() { }

  getTrip(trip: Trip) {
    this.CurrentTrip$.next(trip);
  }

  getTrips(){
    return this.Trips$.value;
  }

}
