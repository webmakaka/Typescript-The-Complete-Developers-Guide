"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeysEnum_1 = require("./MetadataKeysEnum");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send("Missing property " + key);
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstnce();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeysEnum.path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeysEnum.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeysEnum.middleware, target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeysEnum.validator, target.prototype, key) || [];
            var validator = bodyValidators(requiredBodyProps);
            if (path) {
                router[method].apply(router, __spreadArrays(["" + routePrefix + path], middlewares, [validator,
                    routeHandler]));
            }
        }
    };
}
exports.controller = controller;
