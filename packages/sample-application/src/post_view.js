import React from "react";
import {Router} from "@alto.js/routing";

export const PostView = () => {

    return (
        <>
            <h1>Post</h1>

            <button
                onClick={() => {Router.goToRoute(`/blogs/${Router.routeAtIndex(2)}/posts`)}}
            >Posts</button>
        </>

    );


};
