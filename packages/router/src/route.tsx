import React, {FunctionComponent, Fragment} from "react";

interface RouteInterface {
    component: JSX.Element;
    path: string;
};

export const Route: FunctionComponent<RouteInterface> = (props) => {

    return (
        <Fragment>
            <div>
                {props.children}
            </div>
        </Fragment>
    )

};

