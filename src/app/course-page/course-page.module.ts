import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CoursePageComponent } from './course-page.component';

import { CourseFreshnessDirective } from './course-freshness.directive';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [
    ListComponent,
    ListItemComponent,
    CoursePageComponent,
    CourseFreshnessDirective,
    OrderByPipe,
    FilterPipe,
  ],
  exports: [
    CoursePageComponent,
  ]
})
export class CoursePageModule { }
