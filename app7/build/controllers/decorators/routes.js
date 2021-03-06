"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MethodsEnum_1 = require("./MethodsEnum");
var MetadataKeysEnum_1 = require("./MetadataKeysEnum");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeysEnum_1.MetadataKeysEnum.path, path, target, key);
            Reflect.defineMetadata(MetadataKeysEnum_1.MetadataKeysEnum.method, method, target, key);
        };
    };
}
exports.get = routeBinder(MethodsEnum_1.MethodsEnum.get);
exports.post = routeBinder(MethodsEnum_1.MethodsEnum.post);
exports.patch = routeBinder(MethodsEnum_1.MethodsEnum.patch);
exports.del = routeBinder(MethodsEnum_1.MethodsEnum.del);
exports.put = routeBinder(MethodsEnum_1.MethodsEnum.put);
