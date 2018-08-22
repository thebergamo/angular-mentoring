import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFieldComponent } from './date-field/date-field.component';
import { DurationFieldComponent } from './duration-field/duration-field.component';
import { AuthorsFieldComponent } from './authors-field/authors-field.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    DateFieldComponent,
    DurationFieldComponent,
    AuthorsFieldComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    DateFieldComponent,
    DurationFieldComponent,
    AuthorsFieldComponent
  ]
})
export class FormFieldsModule { }
