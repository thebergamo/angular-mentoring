import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderOverlayService {
  private visibility: Subject<boolean> = new Subject<boolean>();

  public showLoader(): void {
    console.log('show');
    this.visibility.next(true);
  }

  public hideLoader(): void {
    console.log('hide');
    this.visibility.next(false);
  }

  public shouldLoaderBeVisible(): Observable<boolean> {
    return this.visibility.asObservable();
  }
}
