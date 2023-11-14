import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TriptrapService } from 'src/app/services/triptrap.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-draw';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss']
})
export class LocationPickerComponent implements AfterViewInit {

  constructor(
    private TriptrapService: TriptrapService
    ) { }

  private locationMap: any;
  private currentMarker: any;
  triptrapMarker = this.TriptrapService.triptrapMarker;

  private onMapClick(e: { latlng: { lat: any; lng: any; }; }) {
    if (this.currentMarker) {
      this.locationMap.removeLayer(this.currentMarker);
    }

    this.currentMarker = L.marker(
      [e.latlng.lat, e.latlng.lng],
      {icon: this.triptrapMarker}
      ).addTo(this.locationMap)
    console.log('Coordinates:', e.latlng.lat, e.latlng.lng);
  }

  ngAfterViewInit(): void {
    this.locationMap = L.map('location-map', {
      center: [ 46.44302692468426, 30.749383483911494 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.locationMap);
    this.locationMap.on('click', this.onMapClick.bind(this));
  }
}
