import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import moment from 'moment/src/moment';

import { Course } from './course.interface';
import { ApiService } from './api.service';
import CourseModel from './course.model';
import { map } from 'rxjs/operators';
import { PagingOptions } from './paging-options';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private DEFAULT_LISTING: number = environment.defaultListingCount;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    ) { }

  transformToCourse(rawCourse: any): Course {
    return new CourseModel({
      id: rawCourse.id,
      title: rawCourse.name,
      description: rawCourse.description,
      creation: moment(rawCourse.date).format('YYYY-MM-DD'),
      topRated: rawCourse.isTopRated,
      duration: rawCourse.length,
    });
  }

  transformFromCourse(course: Course, userInfo: object): object {
    return {
      id: course.id,
      name: course.title,
      description: course.description,
      isTopRated: course.topRated,
      date: moment(course.creation).toDate(),
      length: course.duration,
      authors: [userInfo]
    };
  }

  convertToCourses(rawCourses: any): Course[] {
    return rawCourses.map(this.transformToCourse);
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
        map(this.transformToCourse)
      );
  }

  async create(course: Course) {
    const userInfo = await this.authService.getUserInfo().toPromise();
    const objCourse = this.transformFromCourse(course, userInfo);

    console.log({ objCourse });
    this
      .apiService
      .create('courses', objCourse)
      .subscribe();
  }

  async update(id: number, course: Course) {
    const userInfo = await this.authService.getUserInfo().toPromise();
    const objCourse = this.transformFromCourse(course, userInfo);

    this
      .apiService
      .update('courses', id, objCourse)
      .subscribe();
  }

  remove(id: number): void {
    this
      .apiService
      .destroy('courses', id)
      .subscribe();
  }


}
