import { User } from '../models/User';
import { UserPropsInterface } from '../models/UserPropsInterface';
import { ViewAbstract } from './ViewAbstract';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends ViewAbstract<User, UserPropsInterface> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `;
  }
}
