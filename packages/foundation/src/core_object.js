"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kvo_1 = require("./kvo");
class CoreObject extends kvo_1.default {
    toJSON() {
        ;
        let self = this;
        let json = {};
        Object.keys(self).forEach((key) => {
            if (key === 'set' || key === 'get' || key === 'guid' || this[key] instanceof Function) {
                return;
            }
            json[key] = this[key];
        });
        return json;
    }
    init() {
    }
    static create(...args) {
        let instance = new this();
        let mixin = {};
        [...args].forEach((obj) => {
            mixin = Object.assign({}, obj, mixin);
        });
        instance = Object.assign(instance, mixin);
        instance.init();
        return instance;
    }
}
;
exports.default = CoreObject;
//# sourceMappingURL=core_object.js.map