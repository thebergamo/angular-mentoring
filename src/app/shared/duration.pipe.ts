import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const duration = moment.duration(value, 'minutes');
    const hours = duration.hours() ? `${duration.hours()}h ` : '';
    const minutes = duration.minutes() ? `${duration.minutes()}min` : '';

    return `${hours}${minutes}`;
  }

}
