import { Component, Input, ViewChild } from '@angular/core';
import { ValueAccessorBase } from '../value-accessor';
import { NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-authors-field',
  templateUrl: './authors-field.component.html',
  styleUrls: ['./authors-field.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AuthorsFieldComponent,
    multi: true,
  }],
})
export class AuthorsFieldComponent extends ValueAccessorBase<string> {
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
