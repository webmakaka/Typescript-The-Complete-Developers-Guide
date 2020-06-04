import { User } from '../models/User';
import { UserPropsInterface } from '../models/UserPropsInterface';
import { ViewAbstract } from './ViewAbstract';

export class UserEdit extends ViewAbstract<User, UserPropsInterface> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  template(): string {
    return `
            <div>
                <div class="user-form"></div>
                <div class="user-show"></div>
            </div>
        `;
  }
}
