import 'reflect-metadata';

export function get(path: string) {
  return function (target: any, key: string, desc: PropertyDecorator) {
    Reflect.defineMetadata('path', path, target, key);
  };
}
