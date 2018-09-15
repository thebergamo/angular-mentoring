import { Action } from '@ngrx/store';
import { User } from '../shared/user.interface';

export enum UserActionTypes {
  Login = 'ANGULAR_MENTORING/USER_LOGIN',
  Logout = 'ANGULAR_MENTORING/USER_LOGOUT',
  SetRedirectUrl = 'ANGULAR_MENTORING/SET_REDIRECT_URL',
  SetUserInfo = 'ANGULAR_MENTORING/SET_USER_INFO',
}

export class Login implements Action {
  readonly type = UserActionTypes.Login;

  constructor(public payload: any) {}
}

export class SetUserInfo implements Action {
  readonly type = UserActionTypes.SetUserInfo;

  constructor(public payload: User) {}
}

export class SetRedirectUrl implements Action {
  readonly type = UserActionTypes.SetRedirectUrl;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = UserActionTypes.Logout;

  constructor() {}
}
