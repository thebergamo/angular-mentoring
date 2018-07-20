import { User } from '../interfaces/User';

export class UserModel implements User {
  public id = '';
  public firstName =  '';
  public lastName = '';

  constructor(props) {
    Object.assign(this, props);
  }
}
