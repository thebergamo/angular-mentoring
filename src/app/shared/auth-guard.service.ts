import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import * as fromUser from '../reducers/user';
import { map } from 'rxjs/operators';
import { SetRedirectUrl } from '../actions/user.actions';

@Injectable()
export class AuthGuardService {
  constructor(
    private store: Store<fromUser.State>,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;

    return this.store.pipe(
      select(fromUser.isAuthenticated),
      map((isAuthenticated) => {
        console.log('KO', isAuthenticated);
        if (isAuthenticated) {
          return true;
        }

        this.store.dispatch(new SetRedirectUrl(url));

        this.router.navigate(['/login']);

        return false;
      }),
    );
  }
}
