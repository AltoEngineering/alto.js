import React, { FunctionComponent } from 'react';

interface DatastoreInterface {

    [propName: string]: any;

};

interface ApplicationInterface {
    environment: string;
    children: JSX.Element[] | JSX.Element;
    datastore: DatastoreInterface;
    milestone: string;
    version: string;
};

export const Application: FunctionComponent<ApplicationInterface> = (props) => {

    return (
       <React.Fragment>
           {props.children}
       </React.Fragment>
    )
}

export default Application;
