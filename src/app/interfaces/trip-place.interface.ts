export interface TripPlace {
  name: string;
  location: { lat: number, lng: number};
  date: string;
  time: string;
  description: string;
  photos: string[];
}
