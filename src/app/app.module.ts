import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ListComponent,
    FooterComponent,
    ListItemComponent,
    ToolboxComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
