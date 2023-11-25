import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TriptrapService } from 'src/app/services/triptrap.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Trip } from 'src/app/interfaces/trip.interface';

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
  private triptrapMarker = this.TriptrapService.triptrapMarker;
  private waypoints: L.LatLng[] = [];
  private routingControl: any;
  @ViewChild("closeButton") closeButton!: ElementRef;

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
    for (let trip of this.Trips$.value){
      const marker = L.marker(
        [
          trip.tripPlaces[0].location.lat,
          trip.tripPlaces[0].location.lng
        ],
        {icon: this.triptrapMarker}
        ).addTo(this.map);
        this.mapMarkers.push(marker);

        marker.on('click', () => {
          this.removeAllMarkers();
          this.drawTripMarkers(trip);
        });
    }
  }

  private removeAllMarkers(): void {
    for (let marker of this.mapMarkers) {
      this.map.removeLayer(marker);
      if (this.routingControl) {
        this.map.removeControl(this.routingControl);
      }
    }
    this.mapMarkers = [];
    this.waypoints = [];
  }

  private drawTripMarkers(trip: Trip): void {
    this.mapMarkers = [];
    for (let place of trip.tripPlaces){
      this.waypoints.push(L.latLng(place.location.lat, place.location.lng))
      const marker = L.marker(
        [
          place.location.lat,
          place.location.lng
        ],
        {icon: this.triptrapMarker}
        ).addTo(this.map);
      this.mapMarkers.push(marker);
    }
    if (this.routingControl) {
      this.map.removeControl(this.routingControl);
    }

    this.routingControl = L.Routing.control({
      waypoints: this.waypoints,
      plan: L.Routing.plan(this.waypoints, {
        createMarker: (i, wp) => {
          return L.marker(wp.latLng, {
            icon: this.triptrapMarker
          });
        }
      })
    }).addTo(this.map);

    const closeButton = document.getElementById('close-button-home');
    if (closeButton) {
      closeButton.style.display = 'inline-flex';
    }
  }

  goToTrips() {
    this.removeAllMarkers();
    this.drawMarkers();

    const closeButton = document.getElementById('close-button-home');
    if (closeButton) {
      closeButton.style.display = 'none';
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
        this.removeAllMarkers();
        this.drawMarkers();
        this.TriptrapService.placeAdded$.next(false)
      }
    });
  }
}


