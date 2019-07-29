import * as React from "react";

export const Foundation = () => {
    let [state, setState] = React.useState('Foundation');

    return (
        <div>{state}</div>
    )

};
