import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  searchTerm = '';
  onSearchClick() {
    console.log(this.searchTerm);
  }

  constructor() { }

  ngOnInit() {
  }

}
