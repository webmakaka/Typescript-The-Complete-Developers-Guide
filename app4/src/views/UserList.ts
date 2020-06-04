import { User } from '../models/User';
import { UserPropsInterface } from '../models/UserPropsInterface';
import { CollectionViewAbstract } from './CollectionViewAbstract';
import { UserShow } from './UserShow';

export class UserList extends CollectionViewAbstract<User, UserPropsInterface> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
