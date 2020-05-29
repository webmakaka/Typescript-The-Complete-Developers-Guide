import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.set({ age: 9999 });

console.log(user.get('name'));
console.log(user.get('age'));
