import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeysEnum } from './MetadataKeysEnum';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeysEnum.middleware, target, key) || [];

    middlewares.push(middleware);

    Reflect.defineMetadata(
      MetadataKeysEnum.middleware,
      middlewares,
      target,
      key
    );
  };
}
