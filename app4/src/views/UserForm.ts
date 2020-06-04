import { User } from '../models/User';
import { UserPropsInterface } from '../models/UserPropsInterface';
import { ViewAbstract } from './ViewAbstract';

type Callback = () => void;

export class UserForm extends ViewAbstract<User, UserPropsInterface> {
  eventsMap(): { [key: string]: Callback } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.set-model': this.onSaveClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
        <div>
            <input placeholder = "${this.model.get('name')}"/>
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save-model">Save User</button>
        </div>
      `;
  }
}
