import * as React from "react";

export const Runtime = () => {
    let [state, setState] = React.useState('Runtime');

    return (
        <div>{state}</div>
    )

};
