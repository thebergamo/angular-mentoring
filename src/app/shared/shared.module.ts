import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DurationPipe } from './duration.pipe';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AlertComponent } from './alert/alert.component';
import { LoaderOverlayComponent } from './loader-overlay/loader-overlay.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
    DurationPipe,
    AlertComponent,
    LoaderOverlayComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
    AlertComponent,
    LoaderOverlayComponent,
    DurationPipe,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ]
})
export class SharedModule { }
