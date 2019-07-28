import React, {useState, useEffect} from 'react';
import {Application} from "@alto.js/runtime";
import {Route} from "@alto.js/router";
import Index from "./ui/index_view";
import CurrentTimeView from "./ui/current_time_view";

const LOCAL = 'local';
// const STAGING = 'staging';
// const PRODUCTION = 'production';

const Datastore = {
    currentTime: new Date(),
    name: 'Chad'
};

const Routestore = {
    url: null,
    notfound: true
};

const Main = () => {
    let [data, setData] = useState(Datastore);
    let [router, setRouter] = useState(Routestore);

    useEffect(() => {
        setRouter(Object.assign({}, router, {url: window.location.pathname}));
    }, [window.location.pathname]);

    return (
        <Application
            environment={LOCAL}
            datastore={{data, setData}}
            milestone='19a'
            version='1.0'
        >

            <Route
                datastore={{router, setRouter}}
                path={'/'}>

                <Index
                    datastore={{data, setData}}/>

            </Route>

            <Route
                datastore={{router, setRouter}}
                path={'/current-time'}>

                <CurrentTimeView
                    datastore={{data, setData}}/>

            </Route>

            <Route
                datastore={{router, setRouter}}
                path={'/blogs'}>

                <CurrentTimeView
                    datastore={{data, setData}}/>

            </Route>

            <Route
                datastore={{router, setRouter}}
                path={'/blogs/:id/'}>

                <CurrentTimeView
                    datastore={{data, setData}}/>

            </Route>

            <Route
                datastore={{router, setRouter}}
                path={'/404'}>

                <CurrentTimeView
                    datastore={{data, setData}}/>

            </Route>

        </Application>
    )

};

export default Main;
