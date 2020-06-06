"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeysEnum_1 = require("./MetadataKeysEnum");
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstnce();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeysEnum.path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeysEnum.method, target.prototype, key);
            if (path) {
                router[method]("" + routePrefix + path, routeHandler);
            }
        }
    };
}
exports.controller = controller;
