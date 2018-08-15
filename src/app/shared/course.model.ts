import { Course } from './course.interface';

export default class CourseModel implements Course {
  public id = 0;
  public title = '';
  public creation = new Date();
  public topRated = false;
  public duration = 0;
  public description = '';

  constructor(props) {
    Object.assign(this, props);
  }
}
