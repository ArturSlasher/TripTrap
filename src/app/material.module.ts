import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatBadgeModule
  ]
})

export class MaterialModule {}
