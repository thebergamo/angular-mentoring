import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ToolboxComponent } from './toolbox.component';

describe('SearchFormComponent', () => {
  let component: ToolboxComponent;
  let fixture: ComponentFixture<ToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#View', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render an input for search', () => {
      const inputEl = fixture.debugElement.query(By.css('input[name="searchTerm"]'));

      expect(inputEl).toBeTruthy();
    });

    it('should render an button for search', () => {
      const searchBtnEl = fixture.debugElement.query(By.css('.toolbox__search-btn'));

      expect(searchBtnEl).toBeTruthy();
    });

    it('should render an button for add new Course', () => {
      const addCourseEl = fixture.debugElement.query(By.css('.toolbox__new-course-btn'));

      expect(addCourseEl).toBeTruthy();
    });
  });

  describe('#Methods', () => {
    it('#onLoadMoreClick', () => {
      component.searchTerm = 'Mark';
      console.log = jasmine.createSpy();

      component.onSearchClick();

      expect(console.log).toHaveBeenCalledWith('Mark');
    });
  });
});
