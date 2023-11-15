import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpComponent } from './landingp/landingp.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
    

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'land', component: LandingpComponent },
  { path: 'signup', component: SignupComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
