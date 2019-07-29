import React from 'react';
import {Data} from "@alto.js/data";
import {Foundation} from "@alto.js/foundation";
import {Router} from "@alto.js/router";
import {Runtime} from "@alto.js/runtime";
import {UI} from "@alto.js/ui";

const Main = () => {

    return (
        <>
            <Data/>
            <Foundation/>
            <Router/>
            <Runtime/>
            <UI/>
        </>
    )

};

export default Main;
