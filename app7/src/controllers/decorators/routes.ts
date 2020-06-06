import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MethodsEnum } from './MethodsEnum';
import { MetadataKeysEnum } from './MetadataKeysEnum';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeysEnum.path, path, target, key);
      Reflect.defineMetadata(MetadataKeysEnum.method, method, target, key);
    };
  };
}

export const get = routeBinder(MethodsEnum.get);
export const post = routeBinder(MethodsEnum.post);
export const patch = routeBinder(MethodsEnum.patch);
export const del = routeBinder(MethodsEnum.del);
export const put = routeBinder(MethodsEnum.put);
