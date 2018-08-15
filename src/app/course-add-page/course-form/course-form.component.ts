import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/course.interface';
import CourseModel from '../../shared/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  public course: Course;
  public authors: string;

  constructor() { }

  ngOnInit() {
    this.course = new CourseModel({});
  }

  onSaveClick() {
    console.log('You are saving!');
  }

  onCancelClick() {
    console.log('You are canceling!');
  }

}
