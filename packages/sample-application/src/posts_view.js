import React from "react";
import {Router} from "@alto.js/routing";

export const PostsView = () => {

    return (
        <>
            <h1>Posts</h1>

            <button
                onClick={() => {Router.goToRoute(`/blogs/${Router.routeAtIndex(2)}`)}}
            >Blog</button>

            <button
                onClick={() => {Router.goToRoute(`/blogs/${Router.routeAtIndex(2)}/posts/${new Date().getMilliseconds()}`)}}
            >Post</button>
        </>

    );


};
