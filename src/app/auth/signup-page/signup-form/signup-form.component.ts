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
    if (!this.checkPassword(password, confirmpassword)) {
      this.checkPassword(password, confirmpassword)
      this.router.navigate(['signup']);
    }
    else this.triptrapService.signup(email, password, username);
  }

  checkPassword(password: string, confirmpassword: string) {
    if (password === confirmpassword){
      return true;
    }
    else {
      this.incorrect.nativeElement.style.display = 'block';
      return false;
    }
  }

  ngOnInit(): void {
  }

}
