import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddPlaceComponent } from './add-place/add-place.component';
import { TriptrapService } from 'src/app/services/triptrap.service';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {

  Trips$ = this.TriptrapService.Trips$;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private TriptrapService: TriptrapService
    ) { }

  openBottomSheet(): void {
    this._bottomSheet.open(AddPlaceComponent);
  }

  ngOnInit(): void {
  }

}
