import { Component, Input, ViewChild } from '@angular/core';
import { ValueAccessorBase } from '../value-accessor';
import { NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration-field',
  templateUrl: './duration-field.component.html',
  styleUrls: ['./duration-field.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DurationFieldComponent,
    multi: true,
  }],
})
export class DurationFieldComponent extends ValueAccessorBase<string> {
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
