import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgpImagePickerModule } from 'ngp-image-picker';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatTabsModule,
    MatSliderModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgpImagePickerModule,
    MatInputModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatTabsModule,
    MatSliderModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgpImagePickerModule,
    MatInputModule,
    MatSidenavModule
  ]
})

export class MaterialModule {}
