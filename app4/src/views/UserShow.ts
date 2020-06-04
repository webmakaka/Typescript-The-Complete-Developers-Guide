import { User } from '../models/User';
import { UserPropsInterface } from '../models/UserPropsInterface';
import { ViewAbstract } from './ViewAbstract';

export class UserShow extends ViewAbstract<User, UserPropsInterface> {
  template(): string {
    return `
            <div>
                <h1>User Detail</h1>
                <div>User Name: ${this.model.get('name')}</div>
                <div>User Age: ${this.model.get('age')}</div>
            </div>
        `;
  }
}
