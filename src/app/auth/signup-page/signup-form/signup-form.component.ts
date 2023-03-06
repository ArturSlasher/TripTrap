import { TriptrapService } from 'src/app/services/triptrap.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  @ViewChild("incorrect") incorrect!: ElementRef;

  constructor(
    public triptrapService: TriptrapService,
    public router: Router
  ) { }

  signup(email: string, password: string, confirmpassword: string, username: string){
    if (email.length && username.length && this.checkPassword(password, confirmpassword)) {
      this.triptrapService.signup(email, password, username);
    }
    else {
      this.checkPassword(password, confirmpassword)
      this.router.navigate(['signup']);
      this.incorrect.nativeElement.style.display = 'block';
    }
  }

  checkPassword(password: string, confirmpassword: string) {
    if (password.length >= 4 && password === confirmpassword) return true;
    else return false;
  }

  ngOnInit(): void {
  }

}
