export class Attributes<T> {
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  constructor(private data: T) {}

  getAll(): T {
    return this.data;
  }
}
