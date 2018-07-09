import { Course } from '../interfaces/course';

export default class CourseModel implements Course {
  id = '';
  title = '';
  creation = new Date();
  duration = 0;
  description = '';

  constructor(props) {
    Object.assign(this, props);
  }
}
