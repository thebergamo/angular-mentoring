import { Injectable } from '@angular/core';

import { COURSES } from './courses.mock';
import { Course } from './course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = COURSES;
  constructor() { }

  getList(): Course[] {
    return this.courses;
  }

  getById(id: number): Course {
    const courses: Course[] = this.getList();

    return courses.find((course: Course) => course.id === id);
  }

  create(course: Course): void {
    this.courses = [...this.courses, course];
  }

  update(id: number, course: Course): void {
    const courses = this.getList();

    this.courses = courses.map((c: Course) => {
      if (c.id === id) {
        return course;
      }

      return c;
    });
  }

  remove(id: number): void {
    const courses = this.getList();

    this.courses = courses.filter((course: Course) => course.id !== id);
  }


}
