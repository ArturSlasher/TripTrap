import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { LoginFormComponent } from './auth/login-page/login-form/login-form.component';
import { IllustrationsComponent } from './auth/illustrations/illustrations.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { SignupFormComponent } from './auth/signup-page/signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HomeCardsComponent } from './home/home-cards/home-cards.component';
import { NavtabsComponent } from './header/navtabs/navtabs.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { TripsGroupComponent } from './my-trips/trips-group/trips-group.component';
import { UserCardComponent } from './my-trips/trips-group/user-card/user-card.component';
import { TripsListComponent } from './my-trips/trips-group/trips-list/trips-list.component';
import { TripContentSectionComponent } from './my-trips/trip-content-section/trip-content-section.component';
import { AuthComponent } from './auth/auth.component';

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
    NavtabsComponent,
    MyTripsComponent,
    TripsGroupComponent,
    UserCardComponent,
    TripsListComponent,
    TripContentSectionComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
