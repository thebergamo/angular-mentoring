import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Course } from '../shared/course.interface';
import { Observable } from 'rxjs';
import { CourseService } from '../shared/course.service';

@Injectable()
export class CourseDetailResolverService implements Resolve<Course> {
  constructor(
    private courseService: CourseService,
    private router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    const id = Number(route.paramMap.get('id'));

    console.log({ id });

    return this.courseService.getById(id);
  }
}
