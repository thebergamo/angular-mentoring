import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  @Input()
  query = '';

  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();

  onSearchClick() {
    this.search.emit(this.query);
  }

  constructor() { }

  ngOnInit() {
  }

}
