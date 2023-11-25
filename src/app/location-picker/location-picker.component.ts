import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { TriptrapService } from 'src/app/services/triptrap.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public dialogRef: MatDialogRef<LocationPickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.zoomLevel = data?.zoom || 0;
    }

  private locationMap: any;
  private currentMarker: any;
  triptrapMarker = this.TriptrapService.triptrapMarker;
  zoomLevel: number;

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

    } else {
      console.log('No marker available to save coordinates.');
    }
  }

  ngAfterViewInit(): void {
    try {
      this.locationMap = L.map('location-map', {
        center: [ 46.44302692468426, 30.749383483911494 ],
        zoom: this.zoomLevel
      });

      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.locationMap);
      this.locationMap.on('click', this.onMapClick.bind(this));
    } catch (error) {
      if ((error as Error).message.includes('Map container is already initialized')) {
          console.error('Catch: Map container is already initialized.');
          // Get the map container element by ID
          const mapContainer = document.getElementById('map-container');

          if (mapContainer) {
            // Clear the inner HTML of the map container
            mapContainer.innerHTML = '';

            // Re-initialize the map
            this.locationMap = L.map('location-map', {
              center: [46.44302692468426, 30.749383483911494],
              zoom: this.zoomLevel
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
    }
  }
}
