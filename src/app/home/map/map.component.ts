import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
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
  private map: any;

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

  private drawPath(): void {
    const waypoints = [
      L.latLng(46.59027614061278, 30.795222481508862),
        L.latLng(46.44302692468426, 30.749383483911494),
        L.latLng(46.41306176109284, 30.72468104612119)
    ];

    const customIcon = L.icon({
      iconUrl: 'assets/Logo.png', // Path to your custom marker image
      iconSize: [32, 32], // Adjust the size of the custom marker image
      iconAnchor: [16, 32] // Adjust the anchor point of the custom marker image
    });

    L.Routing.control({
      waypoints: waypoints,
      plan: L.Routing.plan(waypoints, {
        createMarker: function(i, wp) {
          return L.marker(wp.latLng, {
            icon: customIcon
          });
        }
      })
    }).addTo(this.map);

  }

  openBottomSheet(): void {
    this._bottomSheet.open(AddTripComponent);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.drawPath();
  }
}


