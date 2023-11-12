import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Trip } from '../interfaces/trip.interface';
import { TripPlace } from './../interfaces/trip-place.interface';
import { Planning } from '../interfaces/planning.interface';
import { User } from '../interfaces/user.interface';
import { Auth } from '../interfaces/auth.interface';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class TriptrapService {

  constructor() { }

  Trips$ = new BehaviorSubject<Trip[]>([]);
  EmptyTrips$ = new BehaviorSubject<Trip[]>([]);
  FullTrips$ = new BehaviorSubject<Trip[]>(
    [
      {
        name: 'Westfalen, Germany',
        date: '14/01/2022-07/02/2022',
        photo: 'assets/demo-photos/germany-trip-photo.png',
        tripPlaces: [
          {
            name: "Frankfurt am Mein",
            location: "Frankfurt am Mein, Germany",
            date: "19/01/2022",
            time: "14:00",
            description: "I was blown away by the modern skyscrapers and impressive skyline, but also delighted by the charming Old Town and beautiful parks. Frankfurt is a true international hub, with a bustling business district, world-class museums, and a diverse food scene that left me wanting more.",
            photos: ["assets/demo-photos/frankfurt-place-photo-1.png", "assets/demo-photos/frankfurt-place-photo-2.png", "assets/demo-photos/frankfurt-place-photo-3.png", "assets/demo-photos/frankfurt-place-photo-4.png", "assets/demo-photos/frankfurt-place-photo-5.png", "assets/demo-photos/frankfurt-place-photo-6.png", "assets/demo-photos/frankfurt-place-photo-7.png", "assets/demo-photos/frankfurt-place-photo-8.png", "assets/demo-photos/frankfurt-place-photo-9.png", "assets/demo-photos/frankfurt-place-photo-10.png"]
          },
          {
            name: "Cologne",
            location: "Köln, Germany",
            date: "15/01/2022",
            time: "10:00",
            description: "The towering spires of the Cologne Cathedral took my breath away, and I loved wandering through the charming streets of the city's Old Town. Whether you're interested in history, culture, or simply soaking up the atmosphere of a vibrant German city, Cologne is an excellent destination that won't disappoint.",
            photos: ["assets/demo-photos/koln-place-photo-1.png", "assets/demo-photos/koln-place-photo-2.png", "assets/demo-photos/koln-place-photo-3.png", "assets/demo-photos/koln-place-photo-4.png", "assets/demo-photos/koln-place-photo-5.png", "assets/demo-photos/koln-place-photo-6.png"]
          },
          {
            name: "Dusseldorf",
            location: "Dusseldorf, Germany",
            date: "14/01/2022",
            time: "11:00",
            description: "The stunning architecture along the Rhine River took my breath away, and I found myself wandering through the streets, mesmerized by the beauty of the city. Overall, my trip to Düsseldorf was an unforgettable experience that left me with a deep appreciation for the city's unique blend of modernity and tradition.",
            photos: ["assets/demo-photos/dusseldorf-place-photo-1.png", "assets/demo-photos/dusseldorf-place-photo-2.png", "assets/demo-photos/dusseldorf-place-photo-3.png", "assets/demo-photos/dusseldorf-place-photo-4.png", "assets/demo-photos/dusseldorf-place-photo-5.png", "assets/demo-photos/dusseldorf-place-photo-6.png", "assets/demo-photos/dusseldorf-place-photo-7.png", "assets/demo-photos/dusseldorf-place-photo-8.png"]
          }
        ]
      },
      {
        name: 'Kyiv, Ukraine',
        date: '23/07/2021-26/07/2021',
        photo: "assets/demo-photos/kyiv-trip-photo.png",
        tripPlaces: [
          {
            name: "Kreschatik",
            location: "Kreschatik, Ukraine",
            date: "26/07/2021",
            time: "18:00",
            description: "The bustling atmosphere was infectious, with street performers, vendors, and locals all adding to the vibrancy of the scene. I loved strolling along the picturesque street, taking in the sights and sounds of the city, and browsing the many shops and cafes. The street was lined with historical buildings and landmarks, each with its own unique story and charm.",
            photos: ["assets/demo-photos/kreschatik-place-photo-1.png", "assets/demo-photos/kreschatik-place-photo-2.png", "assets/demo-photos/kreschatik-place-photo-3.png", "assets/demo-photos/kreschatik-place-photo-4.png", "assets/demo-photos/kreschatik-place-photo-5.png", "assets/demo-photos/kreschatik-place-photo-6.png", "assets/demo-photos/kreschatik-place-photo-7.png", "assets/demo-photos/kreschatik-place-photo-8.png", "assets/demo-photos/kreschatik-place-photo-9.png", "assets/demo-photos/kreschatik-place-photo-10.png", "assets/demo-photos/kreschatik-place-photo-11.png", "assets/demo-photos/kreschatik-place-photo-12.png", "assets/demo-photos/kreschatik-place-photo-13.png", "assets/demo-photos/kreschatik-place-photo-14.png", "assets/demo-photos/kreschatik-place-photo-15.png", "assets/demo-photos/kreschatik-place-photo-16.png", "assets/demo-photos/kreschatik-place-photo-17.png", "assets/demo-photos/kreschatik-place-photo-18.png", "assets/demo-photos/kreschatik-place-photo-19.png", "assets/demo-photos/kreschatik-place-photo-20.png"]
          },
          {
            name: "Motherland Monument",
            location: "Rodina-mat, Ukraine",
            date: "25/07/2021",
            time: "13:00",
            description: "The monument was a stark reminder of the past, with its imposing concrete structures and somber tone. I felt a mix of emotions as I explored the monument, from sadness and reflection to curiosity and awe. The intricate details and symbolism in the monument were fascinating to study, and I gained a new appreciation for the historical significance of the Soviet era.",
            photos: ["assets/demo-photos/motherland-place-photo-1.png", "assets/demo-photos/motherland-place-photo-2.png", "assets/demo-photos/motherland-place-photo-3.png", "assets/demo-photos/motherland-place-photo-4.png", "assets/demo-photos/motherland-place-photo-5.png", "assets/demo-photos/motherland-place-photo-6.png"]
          },
          {
            name: "Santa Sofia Catedral",
            location: "Catedral Santa Sofia, Ukraine",
            date: "24/07/2021",
            time: "10:00",
            description: "I can say that it was a truly awe-inspiring experience. The grandeur and beauty of the architecture, with its soaring ceilings and intricate details, left me feeling humbled and in awe. I spent hours exploring the different sections of the cathedral, from the nave to the crypt, and marveled at the works of art and religious artifacts on display. The atmosphere was peaceful and serene, with soft music and the flickering of candlelight adding to the ambiance.",
            photos: ["assets/demo-photos/catedral-place-photo-1.png", "assets/demo-photos/catedral-place-photo-2.png", "assets/demo-photos/catedral-place-photo-3.png", "assets/demo-photos/catedral-place-photo-4.png", "assets/demo-photos/catedral-place-photo-5.png", "assets/demo-photos/catedral-place-photo-6.png", "assets/demo-photos/catedral-place-photo-7.png", "assets/demo-photos/catedral-place-photo-8.png", "assets/demo-photos/catedral-place-photo-9.png", "assets/demo-photos/catedral-place-photo-10.png", "assets/demo-photos/catedral-place-photo-11.png", "assets/demo-photos/catedral-place-photo-12.png", "assets/demo-photos/catedral-place-photo-13.png", "assets/demo-photos/catedral-place-photo-14.png", "assets/demo-photos/catedral-place-photo-15.png"]
          },
          {
            name: "Kievan Rus",
            location: "Kievan Rus amusement park, Ukraine",
            date: "23/07/2021",
            time: "15:00",
            description: "I can say that it was a truly unique experience. The park was designed to transport visitors back in time, with attractions and activities that recreated life in a bygone era. It was fascinating to see the historical costumes and props, and to learn about the customs and traditions of the past.",
            photos: ["assets/demo-photos/rus-place-photo-1.png", "assets/demo-photos/rus-place-photo-2.png", "assets/demo-photos/rus-place-photo-3.png", "assets/demo-photos/rus-place-photo-4.png", "assets/demo-photos/rus-place-photo-5.png", "assets/demo-photos/rus-place-photo-6.png", "assets/demo-photos/rus-place-photo-7.png", "assets/demo-photos/rus-place-photo-8.png", "assets/demo-photos/rus-place-photo-9.png", "assets/demo-photos/rus-place-photo-10.png", "assets/demo-photos/rus-place-photo-11.png"]
          }
        ]
      },
      {
        name: 'Praha, Czechia',
        date: '01/08/2017-15/08/2017',
        photo: "assets/demo-photos/czech-trip-photo.png",
        tripPlaces: [
          {
            name: "Praha",
            location: "Prahue, Czech Republic",
            date: "15/08/2017",
            time: "17:00",
            description: "I can say that it is a city that truly captures the essence of European charm and beauty. The city's stunning architecture, rich history, and vibrant culture left me completely mesmerized. Exploring the winding streets and alleyways, I felt like I was stepping back in time to a bygone era. The Gothic and Baroque-style buildings were simply breathtaking, and I found myself constantly stopping to take in the intricate details of each structure. The city's many landmarks, such as the Charles Bridge and Prague Castle, were equally impressive, offering panoramic views of the city's stunning skyline.",
            photos: ["assets/demo-photos/prague-place-photo-1.png", "assets/demo-photos/prague-place-photo-2.png", "assets/demo-photos/prague-place-photo-3.png", "assets/demo-photos/prague-place-photo-4.png", "assets/demo-photos/prague-place-photo-5.png", "assets/demo-photos/prague-place-photo-6.png", "assets/demo-photos/prague-place-photo-7.png", "assets/demo-photos/prague-place-photo-8.png", "assets/demo-photos/prague-place-photo-9.png", "assets/demo-photos/prague-place-photo-10.png"]
          },
          {
            name: "Vienna",
            location: "Vienna, Austria",
            date: "10/08/2017",
            time: "13:00",
            description: " I can say that it is a city that truly embodies the grandeur and elegance of Europe's imperial past. The city's stunning architecture, world-renowned art and music scenes, and rich cultural heritage left me completely captivated. Walking through the streets, I was struck by the opulence and splendor of the grand palaces and baroque-style buildings.",
            photos: ["assets/demo-photos/vienna-place-photo-1.png", "assets/demo-photos/vienna-place-photo-2.png", "assets/demo-photos/vienna-place-photo-3.png", "assets/demo-photos/vienna-place-photo-4.png", "assets/demo-photos/vienna-place-photo-5.png", "assets/demo-photos/vienna-place-photo-6.png", "assets/demo-photos/vienna-place-photo-7.png", "assets/demo-photos/vienna-place-photo-8.png"]
          },
          {
            name: "Dresden",
            location: "Dresden, Germany",
            date: "03/08/2017",
            time: "09:00",
            description: "I can say that it is a city that is steeped in history and culture. The city's stunning architecture, from the grand Baroque buildings to the modern architecture, is a true feast for the eyes. Walking through the city's winding streets and alleyways, I was struck by the charm and beauty of the city's many landmarks, such as the Frauenkirche and the Zwinger Palace.",
            photos: ["assets/demo-photos/dresden-place-photo-1.png", "assets/demo-photos/dresden-place-photo-2.png", "assets/demo-photos/dresden-place-photo-3.png", "assets/demo-photos/dresden-place-photo-4.png", "assets/demo-photos/dresden-place-photo-5.png", "assets/demo-photos/dresden-place-photo-6.png"]
          }
        ]
      },
      {
        name: 'Skiing in Slovakia',
        date: '29/01/2016-29/02/2016',
        photo: "assets/demo-photos/slovakia-trip-photo.png",
        tripPlaces: [
          {
            name: "Bratislava",
            location: "Bratislava, Slovakia",
            date: "19/02/2016",
            time: "12:00",
            description: "As someone who has traveled to Bratislava, I can say that it is a charming city with a rich history and culture. The city's old town, with its narrow streets, colorful buildings, and historical landmarks, was a delight to explore. The city's many museums and galleries offered a fascinating insight into the city's past and present. One of the highlights of my trip was visiting the Bratislava Castle, which offers stunning views of the city and the Danube River.",
            photos: ["assets/demo-photos/slovakia-place-photo-1.png", "assets/demo-photos/slovakia-place-photo-2.png", "assets/demo-photos/slovakia-place-photo-3.png", "assets/demo-photos/slovakia-place-photo-4.png", "assets/demo-photos/slovakia-place-photo-5.png", "assets/demo-photos/slovakia-place-photo-6.png", "assets/demo-photos/slovakia-place-photo-7.png", "assets/demo-photos/slovakia-place-photo-8.png"]
          },
          {
            name: "Jasna Low Tatras",
            location: "Demänovská Dolina, Slovakia",
            date: "29/01/2016",
            time: "10:00",
            description: "The snow-covered slopes and stunning mountain views are simply breathtaking. The feeling of gliding down the slopes, the wind in my face and the sun on my skin, is like nothing else. The ski resort I visited was also filled with great food, entertainment, and a lively après-ski scene.",
            photos: ["assets/demo-photos/ski-place-photo-1.png", "assets/demo-photos/ski-place-photo-2.png", "assets/demo-photos/ski-place-photo-3.png", "assets/demo-photos/ski-place-photo-4.png", "assets/demo-photos/ski-place-photo-5.png", "assets/demo-photos/ski-place-photo-6.png", "assets/demo-photos/ski-place-photo-7.png", "assets/demo-photos/ski-place-photo-8.png"]
          }
        ]
      },
      {
        name: 'Himalayas, Nepal',
        date: '01/10/2010-01/11/2010',
        photo: "assets/demo-photos/nepal-trip-photo.png",
        tripPlaces: [
          {
            name: "Poon Hill",
            location: "Poon Hill, Nepal",
            date: "01/10/2010",
            time: "05:00",
            description: "The beauty and grandeur of the natural landscape is truly breathtaking, with majestic peaks rising up against the sky and rugged terrain stretching out as far as the eye can see. Hiking or trekking through the mountains is a challenging but rewarding experience, with each step bringing new sights and sensations. The fresh air and peaceful atmosphere are a welcome escape from the noise and stress of everyday life. Whether you're an experienced mountaineer or a first-time hiker, a trip to the mountains is sure to leave you feeling rejuvenated and inspired.",
            photos: ["assets/demo-photos/nepal-place-photo-1.png", "assets/demo-photos/nepal-place-photo-2.png", "assets/demo-photos/nepal-place-photo-3.png", "assets/demo-photos/nepal-place-photo-4.png", "assets/demo-photos/nepal-place-photo-5.png", "assets/demo-photos/nepal-place-photo-6.png", "assets/demo-photos/nepal-place-photo-7.png", "assets/demo-photos/nepal-place-photo-8.png", "assets/demo-photos/nepal-place-photo-9.png", "assets/demo-photos/nepal-place-photo-10.png", "assets/demo-photos/nepal-place-photo-11.png", "assets/demo-photos/nepal-place-photo-12.png", "assets/demo-photos/nepal-place-photo-13.png", "assets/demo-photos/nepal-place-photo-14.png", "assets/demo-photos/nepal-place-photo-15.png", "assets/demo-photos/nepal-place-photo-16.png", "assets/demo-photos/nepal-place-photo-17.png", "assets/demo-photos/nepal-place-photo-18.png", "assets/demo-photos/nepal-place-photo-19.png", "assets/demo-photos/nepal-place-photo-20.png", "assets/demo-photos/nepal-place-photo-21.png", "assets/demo-photos/nepal-place-photo-22.png", "assets/demo-photos/nepal-place-photo-23.png", "assets/demo-photos/nepal-place-photo-24.png", "assets/demo-photos/nepal-place-photo-25.png", "assets/demo-photos/nepal-place-photo-26.png", "assets/demo-photos/nepal-place-photo-27.png", "assets/demo-photos/nepal-place-photo-28.png", "assets/demo-photos/nepal-place-photo-29.png", "assets/demo-photos/nepal-place-photo-30.png"]
          },
          {
            name: "Chitwan National Park",
            location: "Chitwan, Nepal",
            date: "10/10/2019",
            time: "21:00",
            description: "he dense foliage, vibrant colors, and diverse wildlife were unlike anything I had ever experienced before. Trekking through the jungle, I felt as though I was uncovering a hidden world full of mysteries waiting to be discovered. From the haunting calls of monkeys swinging in the treetops to the playful antics of brightly colored parrots, the jungle was filled with incredible sights and sounds.",
            photos: ["assets/demo-photos/chitwan-place-photo-1.png", "assets/demo-photos/chitwan-place-photo-2.png", "assets/demo-photos/chitwan-place-photo-3.png", "assets/demo-photos/chitwan-place-photo-4.png", "assets/demo-photos/chitwan-place-photo-5.png", "assets/demo-photos/chitwan-place-photo-6.png", "assets/demo-photos/chitwan-place-photo-7.png", "assets/demo-photos/chitwan-place-photo-8.png", "assets/demo-photos/chitwan-place-photo-9.png", "assets/demo-photos/chitwan-place-photo-10.png", "assets/demo-photos/chitwan-place-photo-11.png", "assets/demo-photos/chitwan-place-photo-12.png", "assets/demo-photos/chitwan-place-photo-13.png", "assets/demo-photos/chitwan-place-photo-14.png", "assets/demo-photos/chitwan-place-photo-15.png", "assets/demo-photos/chitwan-place-photo-16.png", "assets/demo-photos/chitwan-place-photo-17.png", "assets/demo-photos/chitwan-place-photo-18.png", "assets/demo-photos/chitwan-place-photo-19.png", "assets/demo-photos/chitwan-place-photo-20.png"]
          },
          {
            name: "Bhutan",
            location: "Thimphu, Bhutan",
            date: "20/10/2010",
            time: "11:00",
            description: "This small country, nestled in the Himalayas, is known for its stunning natural beauty, vibrant culture, and commitment to preserving its traditional way of life. The people of Bhutan were warm and welcoming, and I was struck by their deep reverence for the natural world. Trekking through the majestic mountains and lush valleys, I was awed by the pristine landscapes and stunning vistas around every corner. The country's rich history and spiritual heritage were evident in the stunning temples and monasteries that dotted the landscape.",
            photos: ["assets/demo-photos/bhutan-place-photo-1.png", "assets/demo-photos/bhutan-place-photo-2.png", "assets/demo-photos/bhutan-place-photo-3.png", "assets/demo-photos/bhutan-place-photo-4.png", "assets/demo-photos/bhutan-place-photo-5.png", "assets/demo-photos/bhutan-place-photo-6.png", "assets/demo-photos/bhutan-place-photo-7.png", "assets/demo-photos/bhutan-place-photo-8.png", "assets/demo-photos/bhutan-place-photo-9.png", "assets/demo-photos/bhutan-place-photo-10.png"]
          }
        ]
      },
      {
        name: 'Montenegro',
        date: '01/06/2008-31/08/2008',
        photo: "assets/demo-photos/montenegro-trip-photo.png",
        tripPlaces: [
          {
            name: "Kotor",
            location: "Kotor, Montenegro",
            date: "01/08/2008",
            time: "12:38",
            description: "The city's medieval old town, surrounded by ancient walls and nestled between the mountains and the sea, is simply breathtaking. The winding alleys, charming squares, and historical landmarks, such as the Cathedral of Saint Tryphon and the Maritime Museum, offer a fascinating insight into the city's rich history and culture.",
            photos: ["assets/demo-photos/kotor-place-photo-1.png", "assets/demo-photos/kotor-place-photo-2.png", "assets/demo-photos/kotor-place-photo-3.png", "assets/demo-photos/kotor-place-photo-4.png", "assets/demo-photos/kotor-place-photo-5.png", "assets/demo-photos/kotor-place-photo-6.png"]
          },
          {
            name: "Budva",
            location: "Budva, Montenegro",
            date: "01/07/2008",
            time: "13:48",
            description: "The old town, with its cobbled streets, ancient walls, and charming architecture, is a delight to explore. The city is also known for its stunning beaches, with crystal clear waters and picturesque views.",
            photos: ["assets/demo-photos/budva-place-photo-1.png", "assets/demo-photos/budva-place-photo-2.png", "assets/demo-photos/budva-place-photo-3.png", "assets/demo-photos/budva-place-photo-4.png", "assets/demo-photos/budva-place-photo-5.png", "assets/demo-photos/budva-place-photo-6.png"]
          },
          {
            name: "Tivat",
            location: "Tivat, Montenegro",
            date: "01/08/2008",
            time: "14:58",
            description: "The town has a relaxed and laid-back atmosphere, making it the perfect destination for a peaceful getaway. The marina is a highlight of the town, with luxurious yachts and sailboats docked along the waterfront. The town also boasts a beautiful promenade, lined with palm trees and offering stunning views of the bay.",
            photos: ["assets/demo-photos/tivat-place-photo-1.png", "assets/demo-photos/tivat-place-photo-2.png", "assets/demo-photos/tivat-place-photo-3.png", "assets/demo-photos/tivat-place-photo-4.png", "assets/demo-photos/tivat-place-photo-5.png", "assets/demo-photos/tivat-place-photo-6.png"]
          }
        ]
      },
      {
        name: 'Turkey',
        date: '25/08/2007-07/09/2007',
        photo: "assets/demo-photos/turkey-trip-photo.png",
        tripPlaces: [
          {
            name: "Istanbul",
            location: "Istanbul, Türkiye",
            date: "01/09/2007",
            time: "13:00",
            description: "The city's historical landmarks, such as the Hagia Sophia, Blue Mosque, and Topkapi Palace, are simply stunning and offer a glimpse into the city's rich past. The vibrant markets and bazaars, such as the Grand Bazaar and Spice Market, are filled with colorful goods and delicious local cuisine. The city's location at the crossroads of Europe and Asia also adds to its unique character, with a blend of cultures and cuisines that are truly fascinating.",
            photos: ["assets/demo-photos/istanbul-place-photo-1.png", "assets/demo-photos/istanbul-place-photo-2.png", "assets/demo-photos/istanbul-place-photo-3.png", "assets/demo-photos/istanbul-place-photo-4.png", "assets/demo-photos/istanbul-place-photo-5.png", "assets/demo-photos/istanbul-place-photo-6.png", "assets/demo-photos/istanbul-place-photo-7.png", "assets/demo-photos/istanbul-place-photo-8.png", "assets/demo-photos/istanbul-place-photo-9.png", "assets/demo-photos/istanbul-place-photo-10.png", "assets/demo-photos/istanbul-place-photo-11.png", "assets/demo-photos/istanbul-place-photo-12.png"]
          },
          {
            name: "Turkey Resort Hotel",
            location: "Alanya/Antalya, Türkiye",
            date: "25/08/2007",
            time: "15:00",
            description: "The hotel was stunning, with luxurious amenities and breathtaking views of the Mediterranean Sea.",
            photos: ["assets/demo-photos/turkey-place-photo-1.png", "assets/demo-photos/turkey-place-photo-2.png", "assets/demo-photos/turkey-place-photo-3.png", "assets/demo-photos/turkey-place-photo-4.png", "assets/demo-photos/turkey-place-photo-5.png", "assets/demo-photos/turkey-place-photo-6.png"]
          }
        ]
      }
    ]
  );

  CurrentTrip$ = new BehaviorSubject<Trip>(this.Trips$.value[0]);

  auths: Auth[] = [
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
      username: "Artur",
      photo: "assets/demo-photos/demo-user.png",
      address: "Odesa, Ukraine",
      bio: "Hello, world! I am a developer of this website. Nice to see you here!",
      Trips: this.FullTrips$
    },
    {
      id: 2,
      username: "empty user",
      photo: "",
      address: "",
      bio: "",
      Trips: this.EmptyTrips$
    }
  ]

  User$ = new BehaviorSubject<User | undefined>(undefined);

  isLoggedIn: boolean = false;

  login(email: string, password: string) {
    for(let auth of this.auths){
      if (auth.email === email && auth.password === password){
        this.isLoggedIn = true;
        this.updateAfterLogin(auth.id);
        return true;
      }
    }
    return false;
  }

  signup(email: string, password: string, username: string) {
    this.auths.push({ id: this.auths.length+1, email: email, password: password});
    this.users.push({ id: this.users.length+1, username: username, photo: "", address: "", bio: "", Trips: this.EmptyTrips$});
    this.isLoggedIn = true;
    this.updateAfterLogin(this.auths.length);
  }

  updateAfterLogin(id: number){
    this.User$.next(this.findUserByID(id));
    if (this.User$.value != undefined) {
      this.Trips$.next(this.User$.value.Trips.value);
      this.CurrentTrip$.next(this.User$.value.Trips.value[0]);
    }
  }

  findUserByID(id: number){
    for (let user of this.users){
      if (user.id === id){
        return user;
      }
    }
    return undefined;
  }

  findUserByEmail(email: string){
    for (let auth of this.auths){
      if (auth.email === email){
        return auth;
      }
    }
    return undefined;
  }

  TabIndex$ = new BehaviorSubject<number | undefined>(undefined);
  goToMyTrips(){
    this.TabIndex$.next(1);
  }

  IsPlanningMapRedrawNeeded$ = new BehaviorSubject<boolean>(false);
  Planning$ = new BehaviorSubject<Planning>({
    startPointX: 0,
    startPointY: 0,
    endPointX: 0,
    endPointY: 0
  });
  drawPlanning(startPointX: number, startPointY: number, endPointX: number, endPointY: number) {
    this.Planning$.next({
      startPointX: startPointX,
      startPointY: startPointY,
      endPointX: endPointX,
      endPointY: endPointY
    });
  }
}
