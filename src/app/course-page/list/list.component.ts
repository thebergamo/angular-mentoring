import { Component, OnInit, Input } from '@angular/core';

import { Course } from '../../shared/course.interface';
import { CourseService } from '../../shared/course.service';

import { Router } from '@angular/router';
import { PagingOptions } from '../../shared/paging-options';

@Component({
  selector: 'app-course-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public filteredCourses: Course[] = [];
  public query = '';
  public page = 0;
  public endList = false;

  getCourses(queryOptions?: PagingOptions): void {
    this
      .courseService
      .getList(queryOptions)
      .subscribe(
        (courses) => {
          if (queryOptions.page !== 0 && courses.length === 0) {
            this.endList = true;
            return;
          }
          if (queryOptions.page === 0) {
            this.filteredCourses = courses;
            return;
          }

          this.filteredCourses = this.filteredCourses.concat(courses);
        }
      );
  }

  onDeleteCourse(id: number): void {
    console.log(`You're trying to delete course with id: ${id}`);
    if (window.confirm('Do you really want to delete this course?')) {
      this.courseService.remove(id);
    }

    this.getCourses({ page: 0 });
  }

  onSearchCourse(textFragment: string): void {
    this.query = textFragment;
    this.page = 0;

    this.getCourses({ textFragment, page: this.page });
  }

  onLoadMoreClick() {
    console.log('Loading more itens...');
    this.page += 1;

    return this.getCourses({ textFragment: this.query, page: this.page });
  }

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCourses({ page: this.page });
  }
}
