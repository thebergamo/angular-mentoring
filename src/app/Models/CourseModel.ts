import { Course } from '../interfaces/course';

export default class CourseModel implements Course {
  public id = '';
  public title = '';
  public creation = new Date();
  public duration = 0;
  public description = '';

  constructor(props) {
    Object.assign(this, props);
  }
}
