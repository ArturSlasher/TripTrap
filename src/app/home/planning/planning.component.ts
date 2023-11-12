import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddPlanningComponent } from './add-planning/add-planning.component';
import { TriptrapService } from 'src/app/services/triptrap.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements AfterViewInit {

  constructor(
    private _bottomSheet: MatBottomSheet,
    private TriptrapService: TriptrapService
    ) { }

  private planningMap: any;
  IsPlanningMapRedrawNeeded$ = this.TriptrapService.IsPlanningMapRedrawNeeded$;
  Planning$ = this.TriptrapService.Planning$;

  private redrawMap = this.IsPlanningMapRedrawNeeded$.subscribe(() => {
    if (this.IsPlanningMapRedrawNeeded$.value) {
      this.planningMap = L.map('planning-map', {
        center: [ 46.44302692468426, 30.749383483911494 ],
        zoom: 3
      });

      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.planningMap);
    }
  })

  private drawPlanning = this.Planning$.subscribe((planning) => {
    if (this.IsPlanningMapRedrawNeeded$.value) {
      console.log(planning);
      const waypoints = [
        L.latLng(planning.startPointX, planning.startPointY),
        L.latLng(planning.endPointX, planning.endPointY)
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
      }).addTo(this.planningMap);
    }
  })

  openBottomSheet(): void {
    this._bottomSheet.open(AddPlanningComponent);
  }

  ngAfterViewInit(): void {

  }
}
