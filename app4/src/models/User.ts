interface UserProps {
  name: string;
  age: number;
}

export class User {
  get(propName: string): number | string {
    return this.data[propName];
  }

  constructor(private data: UserProps) {}
}
