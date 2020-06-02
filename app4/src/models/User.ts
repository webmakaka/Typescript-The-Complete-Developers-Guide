import { Model } from './Model';
import { UserPropsInterface } from './UserPropsInterface';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';

const rootUrl = 'http://localhost:3000/users';
export class User extends Model<UserPropsInterface> {
  static buildUser(attrs: UserPropsInterface): User {
    return new User(
      new Attributes<UserPropsInterface>(attrs),
      new Eventing(),
      new ApiSync<UserPropsInterface>(rootUrl)
    );
  }
}
