import { RouteObserver } from "./route_observer";
var NO_ROUTE_AT_INDEX_ERROR = 'No route at index:';
var MIN_IDX_ERROR = 'Arg idx can not be a negative number';
var MISSING_ARG_IDX_ERROR = 'Arg idx is required by Router.routeAtIndex';
;
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.route = function (path) {
        if (path === void 0) { path = location.pathname; }
        if (path.charAt(0) === '#') {
            path = path.slice(1, path.length);
        }
        if (path.indexOf('?') > -1) {
            path = path.substr(0, path.indexOf('?'));
        }
        if (path.charAt(path.length - 1) === '/') {
            path = path.slice(0, path.length - 1);
        }
        if (path === '/index' || path === '/') {
            path = '';
        }
        return path;
    };
    Router.goToRoute = function (route) {
        if (!route || route === '' || route === '/') {
            route = '/index';
        }
        if ("/" + route === window.location.pathname) {
            return;
        }
        RouteObserver.set('currentRoute', route);
        window.history.pushState({}, route, route);
    };
    Router.replaceRoute = function (route) {
        if (!route || route === '' || route === '/') {
            route = '/index';
        }
        if ("/" + route === window.location.pathname) {
            return;
        }
        RouteObserver.set('currentRoute', route);
        window.history.replaceState({}, route, route);
    };
    Router.routeAtIndex = function (idx) {
        if (!idx) {
            throw new Error("" + MISSING_ARG_IDX_ERROR);
        }
        if (idx < 0) {
            throw new Error("" + MIN_IDX_ERROR);
        }
        if (!Router.route().split('/')[idx]) {
            throw new Error(NO_ROUTE_AT_INDEX_ERROR + " " + idx);
        }
        return Router.route().split('/')[idx];
    };
    return Router;
}());
export { Router };
;
//# sourceMappingURL=router.js.map