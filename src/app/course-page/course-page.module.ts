import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';

import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CoursePageComponent } from './course-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ListComponent,
    ListItemComponent,
    CoursePageComponent,
  ],
  exports: [
    CoursePageComponent,
  ]
})
export class CoursePageModule { }
