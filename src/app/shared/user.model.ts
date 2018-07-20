import { User } from './user.interface';

export class UserModel implements User {
  public id = '';
  public firstName =  '';
  public lastName = '';

  constructor(props) {
    Object.assign(this, props);
  }
}
