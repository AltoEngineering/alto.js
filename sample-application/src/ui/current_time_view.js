import React from "react";

let CurrentTimeView = ({
    datastore
                       }) => {

    return (

        <div>
            Current time is: {datastore.data.currentTime.toISOString()}
        </div>
    )

};

export default CurrentTimeView;
