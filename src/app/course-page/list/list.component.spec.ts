import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent, ListItemComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#Template', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display app-course-list-item component', () => {
      const listItemEl = fixture.debugElement.queryAll(By.css('.card.list-item'));

      expect(listItemEl.length).toEqual(5);
    });

    it('should display a button for loading more courses', () => {
      const loadMoreBtn = fixture.debugElement.query(By.css('.list__btn-load-more'));

      expect(loadMoreBtn.nativeElement.textContent).toEqual(' Load More Courses ');
    });
  });

  describe('#Methods', () => {
    it('#onLoadMoreClick', () => {
      console.log = jasmine.createSpy();

      component.onLoadMoreClick();

      expect(console.log).toHaveBeenCalledWith('Loading more itens...');
    });

    it('#onDeleteCourseClick', () => {
      console.log = jasmine.createSpy();

      component.onDeleteCourse(1);

      expect(console.log).toHaveBeenCalledWith('You\'re trying to delete course with id: 1');
    });
  });
});
