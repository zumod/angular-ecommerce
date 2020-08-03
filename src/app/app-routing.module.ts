import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { OtpPageComponent } from './otp-page/otp-page.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'otp-page',component:OtpPageComponent},
  

];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
