import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { IllustrationsComponent } from './login-page/illustrations/illustrations.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupFormComponent } from './signup-page/signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeCardsComponent } from './home/home-cards/home-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    IllustrationsComponent,
    SignupPageComponent,
    SignupFormComponent,
    HomeComponent,
    HeaderComponent,
    HomeCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
