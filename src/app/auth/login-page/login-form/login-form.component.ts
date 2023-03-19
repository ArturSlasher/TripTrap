import { TriptrapService } from 'src/app/services/triptrap.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @ViewChild("incorrect") incorrect!: ElementRef;
  @ViewChild("incorrectEmail") incorrectEmail!: ElementRef;
  @ViewChild("nonexistentEmail") nonexistentEmail!: ElementRef;
  @ViewChild("incorrectPassword") incorrectPassword!: ElementRef;

  loginForm: FormGroup = this.formBuilder.group({
    emailControl:  [null,
      [Validators.required, Validators.pattern(
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$|demo/
        )]],
    passwordControl:  [null,
      [
        Validators.required,
        Validators.pattern(
        /^(?=.*\d).{4,8}$|demo/
        )]]
  })

  constructor(
    public triptrapService: TriptrapService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.checkEmail();
    this.checkPassword();
  }

  checkEmail(){
    this.loginForm.get('emailControl')?.valueChanges.pipe(
      debounceTime(500),
      filter(Boolean)
      ).subscribe(value => {
        if (this.loginForm.get('emailControl')?.valid){
          this.incorrectEmail.nativeElement.style.display = 'none';
          if (this.triptrapService.findUserByEmail(this.loginForm.get('emailControl')?.value)){
            this.nonexistentEmail.nativeElement.style.display = 'none';
          }
          else {
            this.nonexistentEmail.nativeElement.style.display = 'block';
          }
        }
        else {
          this.incorrectEmail.nativeElement.style.display = 'block';
        }
      });
  }

  checkPassword(){
    this.loginForm.get('passwordControl')?.valueChanges.pipe(
      debounceTime(500),
      filter(Boolean)
      ).subscribe(value => {
        if (this.loginForm.get('passwordControl')?.valid){
          this.incorrectPassword.nativeElement.style.display = 'none';
        }
        else {
          this.incorrectPassword.nativeElement.style.display = 'block';
        }
      });
  }

  login(email: string, password: string) {
    if (!this.loginForm.valid || !this.triptrapService.login(email, password)){
      this.incorrect.nativeElement.style.display = 'block';
    }
    else this.triptrapService.login(email, password);
  }
}
