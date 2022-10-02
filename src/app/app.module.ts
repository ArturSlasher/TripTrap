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
import { HeaderComponent } from './home/header/header.component';
import { HomeCardsComponent } from './home/map/home-cards/home-cards.component';
import { NavtabsComponent } from './home/header/navtabs/navtabs.component';
import { MyTripsComponent } from './home/my-trips/my-trips.component';
import { TripsGroupComponent } from './home/my-trips/trips-group/trips-group.component';
import { UserCardComponent } from './home/my-trips/trips-group/user-card/user-card.component';
import { TripsListComponent } from './home/my-trips/trips-group/trips-list/trips-list.component';
import { TripContentSectionComponent } from './home/my-trips/trip-content-section/trip-content-section.component';
import { AuthComponent } from './auth/auth.component';
import { MapComponent } from './home/map/map.component';
import { AddTripComponent } from './home/map/add-trip/add-trip.component';
import { AddPlaceComponent } from './home/my-trips/add-place/add-place.component';
import { LocationPickerComponent } from './home/my-trips/add-place/location-picker/location-picker.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


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
    MapComponent,
    AddTripComponent,
    AddPlaceComponent,
    LocationPickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
