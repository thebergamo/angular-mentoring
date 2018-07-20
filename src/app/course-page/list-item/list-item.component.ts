import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../shared/course.interface';

@Component({
  selector: 'course-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input()
  course: Course

  @Output()
  deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  onDeleteClick(id: number) {
    this.deleteCourse.emit(id);
  }

  constructor() { }

  ngOnInit() {
  }

}
