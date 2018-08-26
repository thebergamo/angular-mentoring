import { TestBed, inject } from '@angular/core/testing';

import { CourseDetailResolverService } from './course-detail-resolver.service';

describe('CourseDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDetailResolverService]
    });
  });

  it('should be created', inject([CourseDetailResolverService], (service: CourseDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
