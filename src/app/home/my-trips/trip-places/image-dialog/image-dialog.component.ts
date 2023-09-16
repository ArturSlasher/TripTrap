import {Component, Inject} from '@angular/core';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})

export class ImageDialogComponent {
  constructor(@Inject(DIALOG_DATA) public data: { placePhoto: string }) {}
}
