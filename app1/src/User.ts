import faker from 'faker';
<<<<<<< HEAD
import { Mappable } from './CustomMap';

export class User implements Mappable {
=======

export class User {
>>>>>>> cfbef27eb93cc36fd53e0269ccab6f02fe7ab855
  name: string;
  location: {
    lat: number;
    lng: number;
  };
<<<<<<< HEAD
  color: string = 'red';
=======
>>>>>>> cfbef27eb93cc36fd53e0269ccab6f02fe7ab855

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
<<<<<<< HEAD

  marketContent(): string {
    return `User Name: ${this.name}`;
  }
=======
>>>>>>> cfbef27eb93cc36fd53e0269ccab6f02fe7ab855
}
