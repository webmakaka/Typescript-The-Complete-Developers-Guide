import 'reflect-metadata';
import { MetadataKeysEnum } from './MetadataKeysEnum';

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeysEnum.validator, keys, target, key);
  };
}
