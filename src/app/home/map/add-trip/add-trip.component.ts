import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent implements OnInit {

  constructor() {  }

  // imagePickerConf: ImagePickerConf = {
  //   borderRadius: '4px',
  //   language: 'en',
  //   width: '320px',
  //   height: '240px',
  // };

  ngOnInit(): void {
  }

}
