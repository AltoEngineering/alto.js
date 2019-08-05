import React, { Fragment, useEffect, useState } from "react";
import { useObserver } from "@alto.js/runtime";
import { RouteObserver } from "./route_observer";
import { Router } from "./router";
;
export var Routes = function (props) {
    var _a = useState(Object.assign({}, { index: {} }, props)), state = _a[0], setState = _a[1];
    var _b = useState(null), dom = _b[0], setDom = _b[1];
    var routeObserver = useObserver(RouteObserver)[0];
    var children = React.Children.toArray(state.children);
    var match;
    useEffect(function () {
        window.addEventListener('popstate', function () {
            RouteObserver.set('currentRoute', Router.route() || '/index');
        }, true);
    }, []);
    useEffect(function () {
        var routes = routeObserver.currentRoute.split('/');
        routes.shift();
        var findMatch = function (children, lookup) {
            var noBaseMatch = true;
            if (lookup === '') {
                lookup = '/index';
            }
            if (!lookup && !match) {
                debugger;
                return;
            }
            if (!lookup) {
                setDom(match.props.component);
                return;
            }
            if (!children) {
                Router.replaceRoute('/unknown');
                return;
            }
            if (children.length == undefined) {
                children = [children];
            }
            children.some(function (child) {
                match = child;
                if (child.props.path === lookup || child.props.path === "/" + lookup) {
                    noBaseMatch = false;
                    routes.shift();
                    findMatch(child.props.children, routes[0]);
                    return;
                }
                else if (child.props.path.charAt(0) === ':' || child.props.path.charAt(1) === ':') {
                    noBaseMatch = false;
                    routes.shift();
                    findMatch(child.props.children, routes[0]);
                    return;
                }
            });
            if (noBaseMatch) {
                Router.replaceRoute('/unknown');
            }
        };
        findMatch(children, routes[0]);
    }, [routeObserver.currentRoute]);
    return (React.createElement(Fragment, null, dom));
};
//# sourceMappingURL=routes.js.map