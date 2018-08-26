import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseAddPageComponent } from './course-add-page.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormFieldsModule } from './form-fields/form-fields.module';
import { CourseDetailResolverService } from './course-detail-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    FormFieldsModule,
  ],
  declarations: [
    CourseAddPageComponent,
    CourseFormComponent,
  ],
  exports: [
    CourseAddPageComponent,
  ],
  providers: [
    CourseDetailResolverService,
  ]
})
export class CourseAddPageModule { }
