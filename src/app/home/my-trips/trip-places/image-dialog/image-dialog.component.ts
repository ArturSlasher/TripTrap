import {Component, HostListener, Inject} from '@angular/core';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})

export class ImageDialogComponent {

  currentIndex = 0;

  constructor(
    @Inject(DIALOG_DATA) public data: { placePhotos: string[], placePhoto: string }
    ) {}

  nextPhoto() {
    this.currentIndex = this.data.placePhotos.indexOf(this.data.placePhoto);
    this.data.placePhoto = this.data.placePhotos[++this.currentIndex];
    if (this.currentIndex == this.data.placePhotos.length) {
      this.data.placePhoto = this.data.placePhotos[0];
    }
  }

  priorPhoto() {
    this.currentIndex = this.data.placePhotos.indexOf(this.data.placePhoto);
    this.data.placePhoto = this.data.placePhotos[--this.currentIndex];
    if (this.currentIndex == -1) {
      this.data.placePhoto = this.data.placePhotos[this.data.placePhotos.length-1];
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    // Check the event's key property to determine which key was pressed
    if (event.key === 'ArrowLeft') {
      this.priorPhoto();
    } else if (event.key === 'ArrowRight') {
      this.nextPhoto();
    }
  }
}
