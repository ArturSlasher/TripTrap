import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.scss']
})
export class NavtabsComponent implements OnInit {

  constructor() { }

  logChange(index: number | null) {
    if(index == 1) {
    }
  }

  ngOnInit(): void {
  }

}
