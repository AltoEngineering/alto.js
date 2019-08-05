import React, { Fragment, useState, useEffect } from "react";
import { Router } from "./router";
;
export var Route = function (props) {
    var _a = useState({ isActive: false, path: props.path }), state = _a[0], setState = _a[1];
    var _b = useState(true), isFirstTime = _b[0], setIsFirstTime = _b[1];
    useEffect(function () {
        if (isFirstTime) {
            setIsFirstTime(false);
            return;
        }
    }, []);
    return (React.createElement(Fragment, null, state.isActive ?
        React.createElement("div", null,
            React.createElement("h1", null, Router.route(state.path)),
            props.children)
        :
            null));
};
//# sourceMappingURL=route.js.map