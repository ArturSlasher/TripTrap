import { TripPlace } from './trip-place.interface';

export interface Trip {
  name: string;
  date: string;
  photo: string;
  tripPlaces: TripPlace[];
}
