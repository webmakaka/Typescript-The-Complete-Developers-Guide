import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserPropsInterface } from './models/UserPropsInterface';
import { User } from './models/User';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserPropsInterface) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
