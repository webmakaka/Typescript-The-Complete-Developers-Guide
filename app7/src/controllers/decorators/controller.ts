import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MethodsEnum } from './MethodsEnum';
import { MetadataKeysEnum } from './MetadataKeysEnum';

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstnce();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeysEnum.path,
        target.prototype,
        key
      );

      const method: MethodsEnum = Reflect.getMetadata(
        MetadataKeysEnum.method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(
          MetadataKeysEnum.middleware,
          target.prototype,
          key
        ) || [];

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
