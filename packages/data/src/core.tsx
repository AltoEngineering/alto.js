import * as React from "react";

export const Data = () => {
    let [state, setState] = React.useState('Data');

    return (
        <div>{state}</div>
    )

};
