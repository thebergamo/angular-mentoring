import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../shared/course.interface';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(allCourses: Course[]): Course[] {
    return allCourses.sort((a: any, b: any) => b.creation - a.creation);
  }

}
