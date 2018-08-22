import { Component, Input, ViewChild } from '@angular/core';
import { ValueAccessorBase } from '../value-accessor';
import { NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DateFieldComponent,
    multi: true,
  }],
})
export class DateFieldComponent extends ValueAccessorBase<string> {
  @Input()
  public className = 'form-control';
  @Input()
  public ngModelOptions: object;
  @Input()
  public id: string;

  @ViewChild(NgModel) model: NgModel;

  constructor() {
    super();
  }

}
