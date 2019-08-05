;
;
;
export var Observer = function (state) {
    var observer = {
        connections: [],
        state: state,
        reducer: function (o, payload) {
            var nextState = Object.assign({}, o.state, payload);
            return Object.assign({}, o, { state: nextState });
        },
        set: function (key, value) {
            var _a;
            // update self //
            var nextState = this.reducer(this, (_a = {}, _a[key] = value, _a));
            // update connections //
            this.connections.forEach(function (connection) { return connection(nextState); });
            return nextState.state;
        },
        get: function () {
            debugger;
        }
    };
    return observer;
};
//# sourceMappingURL=observer.js.map