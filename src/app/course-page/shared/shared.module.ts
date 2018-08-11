import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ToolboxComponent } from './toolbox/toolbox.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  declarations: [
    ToolboxComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ToolboxComponent,
  ],
})
export class SharedModule { }
