import 'reflect-metadata';
import { MethodsEnum } from './MethodsEnum';

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeBinder(MethodsEnum.get);
export const post = routeBinder(MethodsEnum.post);
export const patch = routeBinder(MethodsEnum.patch);
export const del = routeBinder(MethodsEnum.del);
export const put = routeBinder(MethodsEnum.put);
