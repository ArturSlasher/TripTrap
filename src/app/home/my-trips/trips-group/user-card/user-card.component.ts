import { Component, OnInit } from '@angular/core';
import { TriptrapService } from 'src/app/services/triptrap.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor(
    public triptrapService: TriptrapService
  ) { }

  User$ = this.triptrapService.User$;

  ngOnInit(): void {
  }

}
