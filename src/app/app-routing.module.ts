import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { AccountComponent } from './auth/account/account.component';
import { HomeComponent } from './home/home.component';
import { ComingSoonComponent } from './home/coming-soon/coming-soon.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'signup', component: SignupPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardService]},
  { path: 'comming-soon', component: ComingSoonComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
