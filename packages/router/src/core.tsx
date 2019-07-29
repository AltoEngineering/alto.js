import * as React from "react";

export const Router = () => {
    let [state, setState] = React.useState('Router');

    return (
        <div>{state}</div>
    )

};
