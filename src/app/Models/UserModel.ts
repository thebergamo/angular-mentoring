import { User } from "../interfaces/User";

export class UserModel implements User {
  id = ''
  firstName =  ''
  lastName = ''

  constructor(props) {
    Object.assign(this, props);
  }
};