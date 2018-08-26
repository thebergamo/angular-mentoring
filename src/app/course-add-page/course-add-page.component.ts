import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../shared/course.interface';
import CourseModel from '../shared/course.model';
import { CourseService } from '../shared/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.css']
})
export class CourseAddPageComponent implements OnInit, OnDestroy {
  public course: Course;
  public editName: string;
  private data$: Subscription = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
  ) { }

  ngOnInit() {
    const { data } = this.route;

    this.data$ = data.subscribe(({ course }) => {
      this.course = course || new CourseModel({});
      this.editName = course
        ? `Edit ${course.title}`
        : 'Add new course';
    });
  }

  ngOnDestroy() {
    this.data$.unsubscribe();
  }

  onSaveClick(course: Course): void {
    this.courseService.create(course);
    this.router.navigate(['/courses']);
  }

  onCancelClick(): void {
    this.router.navigate(['/courses']);
  }

}
