import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Course } from '../shared/course.interface';
import CourseModel from '../shared/course.model';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.css']
})
export class CourseAddPageComponent implements OnInit {
  course: Course;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
  ) { }

  ngOnInit() {
    this.course = this.route.snapshot.data.course || new CourseModel({});
    this.editName = this.route.snapshot.data.course
      ? `Edit ${this.route.snapshot.data.course.title}`
      : 'Add new course';
  }

  onSaveClick(course: Course): void {
    this.courseService.create(course);
    this.router.navigate(['/courses']);
  }

  onCancelClick(): void {
    this.router.navigate(['/courses']);
  }

}
