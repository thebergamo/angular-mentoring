import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../shared/course.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allCourses: Course[], query: string): Course[] {
    return allCourses
      .filter((course: Course) => course.title.indexOf(query) !== -1);
  }

}
