import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  public user: User;

  @Output()
  private logout: EventEmitter<void> = new EventEmitter<void>();

  onLogoutClick(): void {
    this.logout.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
