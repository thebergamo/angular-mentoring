import { Component, OnInit } from '@angular/core';

import { Course } from './shared/course.interface';
import { FilterPipe } from './filter.pipe';

/* tslint:disable */
const courses: Course[] = [
  {
    id: 1,
    title: 'NgAwesome - Course 1',
    duration: 90,
    topRated: true,
    creation: new Date('2018-08-18T19:53:38.218Z'),
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mé, boa gentis num é.'
  },
  {
    id: 2,
    title: 'NgAwesome - Course 2',
    duration: 60,
    topRated: false,
    creation: new Date('2018-08-05T19:53:38.218Z'),
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mé, boa gentis num é.'
  },
  {
    id: 3,
    title: 'NgAwesome - Course 3',
    duration: 110,
    topRated: false,
    creation: new Date('2018-07-30T19:53:38.218Z'),
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mé, boa gentis num é.'
  },
  {
    id: 4,
    title: 'NgAwesome - Course 4',
    duration: 120,
    topRated: false,
    creation: new Date('2018-07-25T19:53:38.218Z'),
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mé, boa gentis num é.'
  },
  {
    id: 5,
    title: 'NgAwesome - Course 5',
    duration: 45,
    topRated: false,
    creation: new Date('2018-07-23T19:53:38.218Z'),
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mé, boa gentis num é.'
  }
];
/* tslint:enable */

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  public allCourses: Course[] = [];
  public filteredCourses: Course[] = [];
  public query = '';

  onSearchCourse(query: string) {
    if (!query) {
      this.filteredCourses = this.allCourses;
      return;
    }
    this.filteredCourses = new FilterPipe().transform(this.allCourses, query);
  }

  constructor() { }

  ngOnInit() {
    this.allCourses = courses;
    this.filteredCourses = courses;
  }

}
