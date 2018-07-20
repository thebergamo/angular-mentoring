import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.interface';

const courses: Course[] = [
  {
    id: 1,
    title: 'NgAwesome - Course 1',
    duration: 90,
    creation: new Date('2018-07-18T19:53:38.218Z'),
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mé, boa gentis num é.'
  },
  {
    id: 2,
    title: 'NgAwesome - Course 2',
    duration: 60,
    creation: new Date('2018-07-20T19:53:38.218Z'),
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mé, boa gentis num é.'
  },
  {
    id: 3,
    title: 'NgAwesome - Course 3',
    duration: 110,
    creation: new Date('2018-07-30T19:53:38.218Z'),
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mé, boa gentis num é.'
  },
  {
    id: 4,
    title: 'NgAwesome - Course 4',
    duration: 120,
    creation: new Date('2018-07-25T19:53:38.218Z'),
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mé, boa gentis num é.'
  },
  {
    id: 5,
    title: 'NgAwesome - Course 5',
    duration: 45,
    creation: new Date('2018-07-23T19:53:38.218Z'),
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mé, boa gentis num é.'
  }
];

@Component({
  selector: 'course-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  courses: Course[];
  onDeleteCourse(id: number) {
    console.log(`You're trying to delete course with id: ${id}`);
  }

  onLoadMoreClick() {
    console.log('Loading more itens...');
  }

  constructor() {
    this.courses = [];
  }

  ngOnInit() {
    this.courses = courses;
  }

}
