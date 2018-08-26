import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../shared/course.interface';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  @Input()
  public course: Course;
  @Input()
  public editName: string;

  public authors: string;

  @Output()
  public saveCourse: EventEmitter<Course> = new EventEmitter<Course>();

  @Output()
  public cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSaveClick(): void {
    this.saveCourse.emit(this.course);
  }

  onCancelClick() {
    this.cancel.emit();
  }

}
