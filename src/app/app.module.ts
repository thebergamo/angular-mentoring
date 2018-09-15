import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoursePageModule } from './course-page/course-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { CourseAddPageModule } from './course-add-page/course-add-page.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageModule } from './not-found-page/not-found-page.module';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'Angular Mentoring',
      logOnly: environment.production,
    }),
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
