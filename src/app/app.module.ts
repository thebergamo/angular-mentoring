import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoursePageModule } from './course-page/course-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { CourseAddPageModule } from './course-add-page/course-add-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoursePageModule,
    LoginPageModule,
    CourseAddPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
