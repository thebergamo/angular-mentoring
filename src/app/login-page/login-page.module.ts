import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    LoginPageComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    LoginPageComponent,
  ],
})
export class LoginPageModule { }
