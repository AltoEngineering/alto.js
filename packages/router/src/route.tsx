import React, {FunctionComponent, Fragment, useState, useEffect} from "react";
import {Router} from "./router";

interface RouteInterface {
    component: JSX.Element;
    path: string;
};

interface RouteStateInterface {
    isActive: boolean;
    path: string;
}

export const Route: FunctionComponent<RouteInterface> = (props) => {
    const [state, setState] = useState<RouteStateInterface>({isActive: false, path: props.path});
    const [isFirstTime, setIsFirstTime] = useState<Boolean>(true);

    useEffect(() => {
        if (isFirstTime) {setIsFirstTime(false); return}
    }, [])

    return (
        <Fragment>
            {
                state.isActive ?
                    <div>
                        <h1>
                            {Router.route(state.path)}
                        </h1>
                        {props.children}
                    </div>
                    :
                    null
            }
        </Fragment>
    )

};

