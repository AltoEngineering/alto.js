import React, {FunctionComponent, Fragment, Children, useEffect, useState} from "react";
import {useObserver} from "@alto.js/runtime";
import {RouteObserver} from "./route_observer";
import {Router} from "./router";

interface RoutesInterface {
    children: any;
    index: object;
};

export const Routes: FunctionComponent<RoutesInterface> = (props) => {
    let [state, setState] = useState(Object.assign({}, {index: {}}, props));
    let [dom, setDom] = useState(null);
    let [routeObserver] = useObserver(RouteObserver);
    let children: any = React.Children.toArray(state.children);
    let match: any;

    useEffect(() => {
        window.addEventListener('popstate', () => {
            RouteObserver.set('currentRoute', Router.route() || '/index')
        }, true);
    }, [])

    useEffect(() => {
        let routes = routeObserver.currentRoute.split('/');

        routes.shift();

        let findMatch = (children: any, lookup: string) => {
            let noBaseMatch = true;

            if (lookup === '') {
                lookup = '/index'
            }

            if (!lookup && !match) {
                debugger;
                return
            }

            if (!lookup) {
                setDom(match.props.component);
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

                if (child.props.path === lookup || child.props.path === `/${lookup}`) {
                    noBaseMatch = false;
                    routes.shift();
                    findMatch(child.props.children, routes[0]);

                    return;
                } else if (child.props.path.charAt(0) === ':' || child.props.path.charAt(1) === ':') {
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
