import { TriptrapService } from 'src/app/services/triptrap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    public triptrapService: TriptrapService
  ) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    this.triptrapService.login(email, password);
  }
}
