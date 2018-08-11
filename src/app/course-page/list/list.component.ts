import { Component, OnInit, Input } from '@angular/core';

import { Course } from '../shared/course.interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  public courses: Course[] = [];

  onDeleteCourse(id: number) {
    console.log(`You're trying to delete course with id: ${id}`);
  }

  onLoadMoreClick() {
    console.log('Loading more itens...');
  }

  constructor() {}

  ngOnInit() {}
}
