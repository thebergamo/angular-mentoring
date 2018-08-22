import * as moment from 'moment';
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseFreshness]'
})
export class CourseFreshnessDirective implements OnInit {
  /* tslint:disable no-input-rename */
  @Input('appCourseFreshness')
  private creationDate: Date;
  /* tslint:enable no-input-rename */

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.setFreshness();
  }

  private setFreshness() {
    const creationDate = moment(this.creationDate);
    if (
      creationDate.isBefore() &&
      creationDate.isSameOrAfter(moment().subtract(14, 'days'))
    ) {
      this.renderer.addClass(this.el.nativeElement, 'list-item--fresh');
    } else if (creationDate.isAfter()) {
      this.renderer.addClass(this.el.nativeElement, 'list-item--upcoming');
    }
  }

}
