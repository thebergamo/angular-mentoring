import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  searchTerm = '';

  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();

  onSearchClick() {
    console.log('SEARCHING');
    this.search.emit(this.searchTerm);
  }

  constructor() { }

  ngOnInit() {
  }

}
