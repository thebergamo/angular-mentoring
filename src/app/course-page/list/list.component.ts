import { Component, OnInit, Input } from '@angular/core';

import { Course } from '../shared/course.interface';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  public courses: Course[] = [];

  onDeleteCourse(id: number): void {
    console.log(`You're trying to delete course with id: ${id}`);
    if (window.confirm('Do you really want to delete this course?')) {
      this.courseService.remove(id);
    }

    this.courses = this.courseService.getList();
  }

  onLoadMoreClick() {
    console.log('Loading more itens...');
  }

  constructor(private courseService: CourseService) {}

  ngOnInit() {}
}
