import { NgModule } from "@angular/core";
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgpImagePickerModule } from 'ngp-image-picker';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
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
