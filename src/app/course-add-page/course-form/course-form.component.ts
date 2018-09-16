import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../shared/course.interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  public courseForm: FormGroup;
  public submitted = false;

  @Input()
  public course: Course;
  @Input()
  public editName: string;

  public authors: string;

  @Output()
  public saveCourse: EventEmitter<Course> = new EventEmitter<Course>();

  @Output()
  public cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      title: new FormControl(this.course.title, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description:  new FormControl(this.course.description, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      creation: new FormControl(this.course.creation, [
        Validators.required,
        Validators.pattern(/\d{4}-\d{2}-\d{2}/)
      ]),
      duration: new FormControl(this.course.duration, [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }

  onSaveClick(): void {
    this.submitted = true;
    console.log(this.courseForm.invalid);
    if (this.courseForm.invalid) {
      console.log(this.courseForm);
      return;
    }
    this.saveCourse.emit(this.course);
  }

  onCancelClick() {
    this.cancel.emit();
  }

}
