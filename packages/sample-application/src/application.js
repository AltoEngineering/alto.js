import React from 'react';
import {Route, Routes, Router} from "@alto.js/router";
import {HomeView} from "./home_view";
import {BlogsView} from "./blogs_view";
import {BlogView} from "./blog_view";
import {UnknownView} from "./unknown_view";
import {PostsView} from "./posts_view";
import {PostView} from "./post_view";

window.Router = Router;

const Application = () => {

    return (
        <Routes>

            <Route path={'/index'} component={HomeView}/>

            <Route path={'/home'} component={HomeView}/>

            <Route path={'/blogs'} component={BlogsView}>

                <Route path={'/:id'} component={BlogView}>

                    <Route path={'/posts'} component={PostsView}>

                        <Route path={'/:some_id'} component={PostView}/>

                    </Route>

                </Route>

            </Route>

            <Route path={'/unknown'} component={UnknownView}/>

        </Routes>
    )

};

export default Application;
