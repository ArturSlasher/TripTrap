import { NgModule } from "@angular/core";
// import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import { MatButtonModule } from '@angular/material/button';
// import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import { MatFormFieldModule } from "@angular/material/form-field";
// import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
// import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import { MatCardModule } from '@angular/material/card';
// import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import { MatTabsModule } from '@angular/material/tabs';
// import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgpImagePickerModule } from 'ngp-image-picker';
// import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import { MatInputModule } from '@angular/material/input';
// import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from '@angular/cdk/dialog';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgpImagePickerModule,
    MatInputModule,
    ReactiveFormsModule,
    DialogModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgpImagePickerModule,
    MatInputModule,
    DialogModule
  ]
})

export class MaterialModule {}
