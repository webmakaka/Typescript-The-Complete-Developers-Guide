"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MetadataKeysEnum_1 = require("./MetadataKeysEnum");
function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeysEnum.middleware, target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(MetadataKeysEnum_1.MetadataKeysEnum.middleware, middlewares, target, key);
    };
}
exports.use = use;
