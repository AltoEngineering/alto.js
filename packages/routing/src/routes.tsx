import React, {FunctionComponent, Fragment, Children, useEffect, useState} from "react";
import {useObserver} from "@alto.js/runtime";
import {RouteObserver} from "./route_observer";
import {Router} from "./router";

interface RoutesInterface {
    children: any;
};
/*
export const Routes: FunctionComponent<RoutesInterface> = (props) => {
    let [state, setState] = useState({});

    useEffect(() => {
        let ro = {};
        let children:any = Children.toArray(props.children);

        while (children) {

            if (!children[0]) {
                setState(Object.assign({}, state, ro));
                return;
            }

            if (!children[0].props.path) {
                children.shift();
                return;
            }

            let node = children[0];

            children.shift();

            // need to check for a nested explicit path...
            // node.props.path.split('/').length > 0

            if (node.props.path.split('/').length > 2) {
                let paths = node.props.path.split('/');
                let routeObject = ro;

                paths.forEach((path:string) => {
                    if (path === "") {
                        return
                    }

                    routeObject[`/${path}`] ? routeObject[`/${path}`] : routeObject[`/${path}`] = {};
                    routeObject = routeObject[`/${path}`];
                });

            } else {

                ro[node.props.path] ? ro[node.props.path] : ro[node.props.path] = {};

                let f = (n: any, r: any) => {

                    r[n.props.path] ? r[n.props.path] : r[n.props.path] = {};

                    if (n.props.children) {

                        Children.toArray(n.props.children).forEach((child: any) => {
                            if (!child.props.path) {
                                return;
                            }

                            if (!r[n.props.path][child.props.path]) {
                                r[n.props.path][child.props.path] = {}
                                f(child, r[n.props.path]);
                            }
                        });
                    } else {
                        if (!n.props.path) {
                            return;
                        }
                        r[n.props.path] ? r[n.props.path] : r[n.props.path] = {};
                    }

                };

                f(node, ro);

            }

        }

    }, [props.children]);

    return (
        <Fragment>
            null
        </Fragment>
    )

};
*/
/*

     let [state] = useState(Object.assign({}, {index: {}}, props));
    let children: any = Children.toArray(state.children);

    useEffect(() => {
        let ro = {};
        let routeObject = ro

        let mapRoutes = (node:any) => {

            if (!node) {return}

            if (!routeObject[node.props.path]) {
                routeObject[node.props.path] = {};
            }

            let queue = [];

            children.shift();
            queue.push(node);

            while (queue.length > 0) {
                let node:any = queue[0];

                queue.shift();

                if (node.props.children) {

                    if (!routeObject[node.props.path]) {
                        routeObject[node.props.path] = {};
                        routeObject = routeObject[node.props.path]
                    }

                    queue.push(node.props.children);
                } else {
                    routeObject[node.props.path] = {};
                    routeObject = routeObject[node.props.path];
                    mapRoutes(children[0]);
                }

            }

        };

        mapRoutes(children[0]);
        console.log(ro)
    }, []);

 */


export const Routes: FunctionComponent<RoutesInterface> = (props) => {
    let [state] = useState(Object.assign({}, {index: {}}, props));
    let [dom, setDom] = useState(null);
    let [routeObserver] = useObserver(RouteObserver);
    let children: any = Children.toArray(state.children);
    let match: any;

    useEffect(() => {
        window.addEventListener('popstate', () => {
            RouteObserver.set('currentRoute', Router.route() || '/index')
        }, true);
    }, []);

    useEffect(() => {
        let routes = routeObserver.currentRoute.split('/');

        routes.shift();

        let findMatch = (children: any, lookup: string) => {
            let noBaseMatch = true;

            if (lookup === '') {
                lookup = '/index'
            }

            if (!lookup) {
                setDom(match);
                return
            }

            if (!children) {
                Router.replaceRoute('/unknown');
                return;
            }

            if (children.length == undefined) {
                children = [children]
            }

            children.some((child: any) => {
                match = child;

                if (child.props.path === lookup || child.props.path === `/${lookup}` || child.props.path.charAt(0) === ':' || child.props.path.charAt(1) === ':') {
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

    return (
        <Fragment>
            {dom}
        </Fragment>
    )

};

