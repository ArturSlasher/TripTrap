import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TriptrapService } from 'src/app/services/triptrap.service';

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.scss']
})
export class AddPlanningComponent {

  @ViewChild("startPointX") startPointX!: ElementRef;
  @ViewChild("startPointY") startPointY!: ElementRef;
  @ViewChild("endPointX") endPointX!: ElementRef;
  @ViewChild("endPointY") endPointY!: ElementRef;

  Planning$ = this.triptrapService.Planning$;

  constructor(
    private triptrapService: TriptrapService,
    private _bottomSheetRef: MatBottomSheetRef
  ) {  }

  savePlanning() {
    this.triptrapService.drawPlanning(
      this.startPointX.nativeElement.value,
      this.startPointY.nativeElement.value,
      this.endPointX.nativeElement.value,
      this.endPointY.nativeElement.value
    )
    this._bottomSheetRef.dismiss();
  }
}
