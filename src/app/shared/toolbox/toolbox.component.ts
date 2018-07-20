import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  searchValue: string = '';
  onSearchClick() {
    console.log(this.searchValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
