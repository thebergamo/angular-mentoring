import * as moment from 'moment';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCourseFreshness]'
})
export class CourseFreshnessDirective implements OnInit {
  /* tslint:disable no-input-rename */
  @Input('appCourseFreshness')
  private creationDate: Date;
  /* tslint:enable no-input-rename */

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setFreshness();
  }

  private setFreshness() {
    // creationDate < now && creationDate >= now - 14 days === FRESH (green)
    // creationDate > now === UPCOMING (blue)
    const creationDate = moment(this.creationDate);
    if (
      creationDate.isBefore() &&
      creationDate.isSameOrAfter(moment().subtract(14, 'days'))
    ) {
      this.el.nativeElement.classList.add('list-item--fresh');
    } else if (creationDate.isAfter()) {
      this.el.nativeElement.classList.add('list-item--upcoming');
    }
  }

}
