import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';

import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CoursePageComponent } from './course-page.component';

import { CourseFreshnessDirective } from './course-freshness.directive';
import { DurationPipe } from './duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ListComponent,
    ListItemComponent,
    CoursePageComponent,
    CourseFreshnessDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
  ],
  exports: [
    CoursePageComponent,
  ]
})
export class CoursePageModule { }
