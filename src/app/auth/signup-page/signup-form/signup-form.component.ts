import { TriptrapService } from 'src/app/services/triptrap.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  @ViewChild("incorrect") incorrect!: ElementRef;
  @ViewChild("incorrectEmail") incorrectEmail!: ElementRef;
  @ViewChild("existentEmail") existentEmail!: ElementRef;
  @ViewChild("incorrectPassword") incorrectPassword!: ElementRef;
  @ViewChild("unconfimedPassword") unconfimedPassword!: ElementRef;

  signupForm: FormGroup = this.formBuilder.group({
    emailControl:  [null,
      [Validators.required, Validators.pattern(
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        )]],
    passwordControl:  [null,
      [
        Validators.required,
        Validators.pattern(
        /^(?=.*\d).{4,8}$/
        )]],
    confirmPasswordControl: [null],
    usernameControl: [""]
  })

  constructor(
    public triptrapService: TriptrapService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.checkEmail();
    this.checkPassword();
    this.checkConfirmPassword();
  }

  checkEmail(){
    this.signupForm.get('emailControl')?.valueChanges.pipe(
      debounceTime(500),
      filter(Boolean)
      ).subscribe(value => {
        console.log(this.signupForm.valid)
        if (this.signupForm.get('emailControl')?.valid){
          this.incorrectEmail.nativeElement.style.display = 'none';
          if (!this.triptrapService.findUserByEmail(this.signupForm.get('emailControl')?.value)){
            this.existentEmail.nativeElement.style.display = 'none';
          }
          else {
            this.existentEmail.nativeElement.style.display = 'block';
          }
        }
        else {
          this.incorrectEmail.nativeElement.style.display = 'block';
        }
      });
  }

  checkPassword(){
    this.signupForm.get('passwordControl')?.valueChanges.pipe(
      debounceTime(500),
      filter(Boolean)
      ).subscribe(value => {
        console.log(this.signupForm.valid)
        if (this.signupForm.get('passwordControl')?.valid){
          this.incorrectPassword.nativeElement.style.display = 'none';
        }
        else {
          this.incorrectPassword.nativeElement.style.display = 'block';
        }
      });
  }

  checkConfirmPassword(){
    this.signupForm.get('confirmPasswordControl')?.valueChanges.pipe(
      debounceTime(500),
      filter(Boolean)
      ).subscribe(value => {
        console.log(this.signupForm.valid)
        if (this.signupForm.get('passwordControl')?.value === this.signupForm.get('confirmPasswordControl')?.value){
          this.unconfimedPassword.nativeElement.style.display = 'none';
        }
        else {
          this.unconfimedPassword.nativeElement.style.display = 'block';
        }
      });
  }

  signup(email: string, password: string, confirmpassword: string, username: string){
    if (!this.signupForm.valid) {
      this.router.navigate(['signup']);
      this.incorrect.nativeElement.style.display = 'block';
    }
    else {
      this.router.navigate(['']);
      this.triptrapService.signup(email, password, username);
    }
  }
}
