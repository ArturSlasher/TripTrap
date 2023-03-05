import { TriptrapService } from 'src/app/services/triptrap.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @ViewChild("incorrect") incorrect!: ElementRef;

  constructor(
    public triptrapService: TriptrapService
  ) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    if (!this.triptrapService.login(email, password)){
      this.incorrect.nativeElement.style.display = 'block';
    }
    else this.triptrapService.login(email, password);
  }
}
