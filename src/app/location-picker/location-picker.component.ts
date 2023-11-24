import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TriptrapService } from 'src/app/services/triptrap.service';
import { MatDialogRef } from '@angular/material/dialog';
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
    private TriptrapService: TriptrapService,
    public dialogRef: MatDialogRef<LocationPickerComponent>
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
  }

  saveLocation() {
    if (this.currentMarker) {
      const markerLatLng = this.currentMarker.getLatLng();
      this.dialogRef.close(markerLatLng);
      // this.locationBuffer$.next({ lat: markerLatLng.lat, lng: markerLatLng.lng });
      // this.TriptrapService.fromLocationPickerToHome = true;
      // this.router.navigate(['/']);

    } else {
      console.log('No marker available to save coordinates.');
    }
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
