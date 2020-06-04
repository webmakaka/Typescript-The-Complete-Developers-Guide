import { Model } from './Model';
import { UserPropsInterface } from './UserPropsInterface';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { Collection } from './Collection';

const rootUrl = 'http://localhost:3000/users';
export class User extends Model<UserPropsInterface> {
  static buildUser(attrs: UserPropsInterface): User {
    return new User(
      new Attributes<UserPropsInterface>(attrs),
      new Eventing(),
      new ApiSync<UserPropsInterface>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserPropsInterface> {
    return new Collection<User, UserPropsInterface>(
      rootUrl,
      (json: UserPropsInterface) => User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
