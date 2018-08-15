import { Component, OnInit } from '@angular/core';

import { Course } from './shared/course.interface';
import { FilterPipe } from './filter.pipe';
import { CourseService } from './shared/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  public allCourses: Course[] = [];
  public filteredCourses: Course[] = [];
  public query = '';

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    const courses = this.courseService.getList();
    this.allCourses = courses;
    this.filteredCourses = courses;
  }

  onSearchCourse(query: string): void {
    if (!query) {
      this.filteredCourses = this.allCourses;
      return;
    }
    this.filteredCourses = new FilterPipe().transform(this.allCourses, query);
  }
}
