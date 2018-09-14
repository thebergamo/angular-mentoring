import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { COURSES } from './courses.mock';
import { Course } from './course.interface';
import { ApiService } from './api.service';
import CourseModel from './course.model';
import { map } from 'rxjs/operators';
import { PagingOptions } from './paging-options';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private DEFAULT_LISTING: number = environment.defaultListingCount;

  constructor(
    private apiService: ApiService,
  ) { }

  convertToCourse(rawCourse: any): Course {
    return new CourseModel({
      id: rawCourse.id,
      title: rawCourse.name,
      description: rawCourse.description,
      creation: rawCourse.date,
      topRated: rawCourse.isTopRated,
    });
  }
  convertToCourses(rawCourses: any): Course[] {
    return rawCourses.map(this.convertToCourse);
  }

  getList(queryString?: PagingOptions): Observable<Course[]> {
    const { page, textFragment } = queryString || { page: 0, textFragment: '' };

    const paging: string = page || page === 0 ? `start=${page * this.DEFAULT_LISTING}&count=${this.DEFAULT_LISTING}` : '';
    const query: string = textFragment ? `&textFragment=${textFragment}` : '';

    const qs = `?${paging}${query}`;

    return this
      .apiService
      .list<Course[]>('courses', qs)
      .pipe(
        map((courses): Course[] => this.convertToCourses(courses))
      );
  }

  getById(id: number): Observable<Course> {
    return this
      .apiService
      .read('courses', id)
      .pipe(
        map(this.convertToCourse)
      );
  }

  create(course: Course): void {
    this.courses = [...this.courses, course];
  }

  update(id: number, course: Course): void {
    // const courses = this.getList();

    // this.courses = courses.map((c: Course) => {
    //   if (c.id === id) {
    //     return course;
    //   }

    //   return c;
    // });
  }

  remove(id: number): void {
    // const courses = this.getList();

    // this.courses = courses.filter((course: Course) => course.id !== id);
  }


}
