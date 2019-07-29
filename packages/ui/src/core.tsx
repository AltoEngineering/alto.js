import * as React from "react";

export const UI = () => {
    let [state, setState] = React.useState('UI');

    return (
        <div>{state}</div>
    )

};
