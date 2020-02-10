import React from 'react';
import {Routes} from "@alto.js/routing";

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

const Index = () => (
    <div>Index</div>
);

const ApplicationRoutes = () => (
    <Routes>
        <Index path="/index" />
    </Routes>
);
export default ApplicationRoutes;
