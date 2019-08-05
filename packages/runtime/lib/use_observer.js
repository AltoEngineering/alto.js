import { useState, useEffect } from "react";
export function useObserver(observer) {
    var _a = useState(observer), o = _a[0], set = _a[1];
    useEffect(function () {
        observer.connections = observer.connections.filter(function (connection) { return connection !== set; });
        if (!observer.connections.includes(set)) {
            observer.connections.push(set);
        }
    }, []);
    return [o.state, observer.set];
}
;
//# sourceMappingURL=use_observer.js.map