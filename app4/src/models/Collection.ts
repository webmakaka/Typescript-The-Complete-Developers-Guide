import axios, { AxiosResponse } from 'axios';
import { User } from './User';
import { UserPropsInterface } from './UserPropsInterface';
import { Eventing } from './Eventing';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  constructor(public rootUrl: string) {}

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: UserPropsInterface) => {
        const user = User.buildUser(value);
        this.models.push(user);
      });

      this.trigger('change');
    });
  }
}
