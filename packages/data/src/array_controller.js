"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ArrayController = () => {
    let arrayController = {
        data: [],
        connections: [],
        reducer: (controller, payload) => {
            return Object.assign({}, controller, { data: payload });
        },
        set(key, value) {
            if (this[`${key}WillChange`]) {
                this[`${key}WillChange`]();
            }
            this.data = this.reducer(this.data, { data: value });
            if (this[`${key}DidChange`]) {
                this[`${key}DidChange`]();
            }
            this.connections.forEach(connection => connection(this.data));
            return this.data.data;
        }
    };
};
exports.default = ArrayController;
//# sourceMappingURL=array_controller.js.map