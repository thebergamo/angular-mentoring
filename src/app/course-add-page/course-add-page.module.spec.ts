import { CourseAddPageModule } from './course-add-page.module';

describe('CourseAddPageModule', () => {
  let courseAddPageModule: CourseAddPageModule;

  beforeEach(() => {
    courseAddPageModule = new CourseAddPageModule();
  });

  it('should create an instance', () => {
    expect(courseAddPageModule).toBeTruthy();
  });
});
