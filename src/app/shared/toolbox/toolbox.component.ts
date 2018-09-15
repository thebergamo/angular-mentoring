import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();

  public query: FormControl = new FormControl('');

  handleChange(e) {
    console.log('change', e);
  }

  constructor() { }

  ngOnInit() {
    this.query.valueChanges
      .pipe(
        filter(value => !value || value.length >= 3),
        debounceTime(200)
      )
      .subscribe((value) => this.search.emit(value));
  }
}
