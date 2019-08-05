import React, {FunctionComponent, Fragment} from "react";

interface ApplicationInterface {
    environment: string;
    children: JSX.Element[] | JSX.Element;
    milestone: string;
    version: string;
};


export const Application: FunctionComponent<ApplicationInterface> = (props) => {

    return (
        <Fragment>
            {props.children}
        </Fragment>
    )

};
