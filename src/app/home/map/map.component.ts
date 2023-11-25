import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TriptrapService } from 'src/app/services/triptrap.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  Trips$ = this.TriptrapService.Trips$;
  isHomeMapRedrawNeeded$ = this.TriptrapService.isHomeMapRedrawNeeded$;
  private map: any;
  private mapMarkers: L.Marker[] = [];


  constructor(
    private _bottomSheet: MatBottomSheet,
    private TriptrapService: TriptrapService
    ) { }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 46.44302692468426, 30.749383483911494 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private drawMarkers(): void {
    const triptrapMarker = this.TriptrapService.triptrapMarker;

    for (let trip of this.Trips$.value){
      const marker = L.marker(
        [
          trip.tripPlaces[0].location.lat,
          trip.tripPlaces[0].location.lng
        ],
        {icon: triptrapMarker}
        ).addTo(this.map)
        this.mapMarkers.push(marker);
    }
  }

  openBottomSheet(): void {
    this._bottomSheet.open(AddTripComponent);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.drawMarkers();

    this.isHomeMapRedrawNeeded$.subscribe(() => {
      if (this.isHomeMapRedrawNeeded$.value) {
        for (let marker of this.mapMarkers) {
          this.map.removeLayer(marker);
        }
        this.mapMarkers = [];
        this.drawMarkers();
        this.TriptrapService.placeAdded$.next(false)
      }
    });
  }
}


