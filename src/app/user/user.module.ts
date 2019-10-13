import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { ToastModule } from 'ng2-toastr/ng2-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    // ToastModule.forRoot(),
    FormsModule,
    RouterModule.forChild([
      { path: 'sign-up', component: SignupComponent }
    ])
  ]
})
export class UserModule { }
