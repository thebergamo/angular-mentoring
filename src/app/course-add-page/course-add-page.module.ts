import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseAddPageComponent } from './course-add-page.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormFieldsModule } from './form-fields/form-fields.module';

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
})
export class CourseAddPageModule { }
