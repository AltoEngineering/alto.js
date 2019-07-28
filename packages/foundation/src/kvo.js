"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KVO {
    set(key, value) {
        let self = this;
        if (self.get(key) === value) {
            return this;
        }
        if (self[`${key}WillChange`]) {
            self[`${key}WillChange`]();
        }
        self[key] = value;
        if (self[`${key}DidChange`]) {
            self[`${key}DidChange`]();
        }
        return self;
    }
    get(key) {
        let self = this;
        return self[key];
    }
    setProperties(hash) {
        let self = this;
        return Object.assign(self, hash);
    }
}
exports.default = KVO;
//# sourceMappingURL=kvo.js.map