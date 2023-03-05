import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Trip } from '../interfaces/trip.interface';
import { TripPlace } from './../interfaces/trip-place.interface';
import { User } from '../interfaces/user';
import { Auth } from '../interfaces/auth';

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
            date: "9/6/2021",
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
            date: "9/6/2021",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Lviv, Svobody Avenue, 28",
            date: "29/6/2021",
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
            date: "9/6/2020",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "New York, Svobody Avenue, 28",
            date: "19/6/2020",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "New York, Svobody Avenue, 28",
            date: "29/6/2020",
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
            date: "9/6/2019",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Vancouver, Svobody Avenue, 28",
            date: "9/6/2019",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Vancouver, Svobody Avenue, 28",
            date: "9/6/2019",
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
            date: "9/6/2021",
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
            date: "19/6/2021",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Lviv, Svobody Avenue, 28",
            date: "29/6/2021",
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
            date: "9/6/2020",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "New York, Svobody Avenue, 28",
            date: "9/6/2020",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "New York, Svobody Avenue, 28",
            date: "9/6/2020",
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
            date: "9/6/2019",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Vancouver, Svobody Avenue, 28",
            date: "9/6/2019",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          },
          {
            name: "Opera and Ballet Theatre",
            location: "Vancouver, Svobody Avenue, 28",
            date: "9/6/2019",
            time: "14:58",
            description: "Travel is one of most people's favorite activities. Why do so many people like to travel so much? It's simple, when a person travels, he gets to know the world around him and himself...",
            photos: ["assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png", "assets/place-photo.png"]
          }
        ]
      }
    ]
  );

  CurrentTrip$ = new BehaviorSubject<Trip>(this.Trips$.value[0]);

  auth: Auth[] = [
    {
      id: 1,
      email: "demo",
      password: "demo"
    },
    {
      id: 2,
      email: "empty",
      password: "empty"
    }
  ]

  users: User[] = [
    {
      id: 1,
      username: "Annette Black",
      photo: "assets\photo.png",
      address: "Los Angeles, USA",
      bio: "I’m an artist. Love traveling, montains, dogs, yoga. Nice to see you here",
      Trips: this.Trips$
    },
    {
      id: 2,
      username: "empty user",
      photo: "",
      address: "",
      bio: "",
      Trips: this.Trips$
    }
  ]

  isLoggedIn: boolean = false;

  signup(email: string, password: string) {
    this.isLoggedIn = true;
  }

  login(email: string, password: string) {
    this.isLoggedIn = true;
  }

  constructor() { }
}
