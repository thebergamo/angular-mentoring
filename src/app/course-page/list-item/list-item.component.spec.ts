import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ListItemComponent } from './list-item.component';
import { Course } from '../../shared/course.interface';
import { By } from '@angular/platform-browser';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;
  const courseMock: Course = {
    id: 1,
    title: 'My Course',
    duration: 110,
    creation: new Date(1994, 4, 3),
    description: 'Awesome description',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    component.course = courseMock;
    fixture.detectChanges();
  });

  describe('#View', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should show course title', () => {
      const h4Title = fixture.debugElement.query(By.css('.card-title'));

      expect(h4Title.nativeElement.textContent).toEqual('My Course');
    });

    it('should show course duration', () => {
      const dateTime = fixture.debugElement.queryAll(By.css('.list-item__datetime h5'));

      expect(dateTime[0].nativeElement.textContent).toEqual('110min');
    });

    it('should show course creation', () => {
      const dateTime = fixture.debugElement.queryAll(By.css('.list-item__datetime h5'));

      expect(dateTime[1].nativeElement.textContent).toEqual('05.03.1994');
    });

    it('should show course description', () => {
      const description = fixture.debugElement.query(By.css('p.card-text'));

      expect(description.nativeElement.textContent).toEqual('Awesome description');
    });
  });


  describe('#Methods', () => {
    it('should emit the id for deletion of course', () => {
      let expectedId: number;
      component.deleteCourse.subscribe((id) => expectedId = id);

      component.onDeleteClick(1);

      expect(expectedId).toEqual(1);
    });
  });
});
