import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TriptrapService } from 'src/app/services/triptrap.service';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.scss']
})
export class NavtabsComponent {

  constructor(
    public triptrapService: TriptrapService,
  ) { }

  @ViewChild("tabRef") TabGroup!: MatTabGroup;
  TabGroup$ = new BehaviorSubject<MatTabGroup>(this.TabGroup);
  TabIndex$ = this.triptrapService.TabIndex$;

  logChange(index: number | null) {
    if(index == 0) {
      this.triptrapService.TabIndex$.next(0);
    }

    if (index == 2 && !this.triptrapService.IsPlanningMapRedrawNeeded$.value) {
      this.triptrapService.IsPlanningMapRedrawNeeded$.next(true);
    }
  }



}
