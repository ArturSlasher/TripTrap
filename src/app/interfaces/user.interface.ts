import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Trip } from './trip.interface';

export interface User {
  id: number
  username: string;
  photo: string;
  address: string;
  bio: string;
  Trips: BehaviorSubject<Trip[]>
}
