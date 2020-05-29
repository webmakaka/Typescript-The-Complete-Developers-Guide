interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  constructor(private data: UserProps) {}
}
