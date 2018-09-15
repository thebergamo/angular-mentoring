import { User } from '../shared/user.interface';
import { UserActionTypes } from '../actions/user.actions';

export interface State {
  isAuthenticated: boolean;
  authToken: string | null;
  user: User | null;
  redirectUrl: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  authToken: null,
  user: null,
  redirectUrl: null,
};

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case UserActionTypes.Login:
      return {
        ...state,
        isAuthenticated: true,
        authToken: action.payload,
      };
    case UserActionTypes.Logout:
      return {
        ...state,
        isAuthenticated: false,
        authToken: null,
      };
    case UserActionTypes.SetUserInfo:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

// selectors
export const isAuthenticated = (state): boolean => {
  return state.user.isAuthenticated;
};
export const getToken = (state: State): string => state.authToken;
export const getUserInfo = (state: State): User => state.user;
export const getRedirectUrl = (state: State): string => state.redirectUrl;
