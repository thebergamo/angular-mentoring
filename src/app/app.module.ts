import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoursePageModule } from './course-page/course-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { CourseAddPageModule } from './course-add-page/course-add-page.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageModule } from './not-found-page/not-found-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoursePageModule,
    LoginPageModule,
    CourseAddPageModule,
    NotFoundPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
