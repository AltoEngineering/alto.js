import React from 'react';
import {Routes} from "@alto.js/routing";
import {UnknownView} from "./ui/unknown_view";

const Index = () => (
    <div>Index</div>
);

const Application = () => (
    <Routes>
        <Index path="/index" />
        <UnknownView path={'/unknown'}/>
    </Routes>
)

export default Application;
