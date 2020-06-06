"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MetadataKeysEnum_1 = require("./MetadataKeysEnum");
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeysEnum_1.MetadataKeysEnum.validator, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
