import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';

import * as fromUser from './user';
import * as fromCourse from './course';

export interface State {
  user: fromUser.State;
  courses: fromCourse.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
  courses: fromCourse.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log({ state, action });

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
