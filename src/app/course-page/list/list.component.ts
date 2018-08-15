import { Component, OnInit, Input } from '@angular/core';

import { Course } from '../../shared/course.interface';
import { CourseService } from '../../shared/course.service';

import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public allCourses: Course[] = [];
  public filteredCourses: Course[] = [];
  public query = '';

  getCourses(): void {
    const courses = this.courseService.getList();
    this.allCourses = courses;
    this.filteredCourses = courses;
  }

  onDeleteCourse(id: number): void {
    console.log(`You're trying to delete course with id: ${id}`);
    if (window.confirm('Do you really want to delete this course?')) {
      this.courseService.remove(id);
    }

    this.getCourses();
    this.onSearchCourse(this.query);
  }

  onSearchCourse(query: string): void {
    if (!query) {
      this.query = query;
      this.filteredCourses = this.allCourses;
      return;
    }

    this.filteredCourses = new FilterPipe().transform(this.allCourses, query);
    this.query = query;
  }

  onLoadMoreClick() {
    console.log('Loading more itens...');
  }

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.getCourses();
  }
}
