import React, {FunctionComponent, useEffect} from 'react';

interface RouteDatstoretoreInterface {

    [propName: string]: any;

};

interface RouteInterface {
    children: JSX.Element[] | JSX.Element;
    datastore: RouteDatstoretoreInterface;
    path: string;
};

export const Route: FunctionComponent<RouteInterface> = (props) => {

    let currentRoute = (path: string):string => {
        if (!path) {
            return ''
        }

        if (path.charAt(0) === '#') {
            path = path.slice(1, path.length)
        }

        if (path.indexOf('?') > -1) {
            path = path.substr(0, path.indexOf('?'));
        }

        if (path.charAt(path.length - 1) === '/') {
            path = path.slice(0, path.length - 1)
        }

        if (path === '/index' || path === '/') {
            path = ''
        }

        return path;
    };

    let parseRoute = (path:string, url:string):boolean => {
        if (!path || !url) {return false}

        let pathSplit = currentRoute(path).split('/');
        let urlSplit = currentRoute(url).split('/');
        let count = 1;

        // if (path==="/404" && props.datastore.router.notfound) {return true}

        // short circuit if length of path and length of url do not match
        if (pathSplit.length !== urlSplit.length) {return false}

        // short circuit if url at index and path at index do not match
        if (urlSplit[count] !== pathSplit[count]) {return false}

        // short circuit on index
        if (path==="" || path==="/" || path==="/index" || path === "index") {return true}

        // only when or path is more than '/' should we walk more
        while (count < pathSplit.length) {

            if (urlSplit[count] === pathSplit[count]) {
                count++;
            } else if (pathSplit[count].charAt(0) === ":") {
                count++;
            }

        };

        // props.datastore.setRouter({}, props.datastore.router, {notfound: false});
        return true;
    };

    let isMatch = parseRoute(props.path, props.datastore.router.url);

    return (
        isMatch
           ?
           <React.Fragment>
              {props.children}
           </React.Fragment>
           :
           null
    )

};

export default Route;
