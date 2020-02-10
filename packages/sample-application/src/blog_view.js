import React from "react";
import {Router} from "@alto.js/routing";

export const BlogView = () => {

    return (
        <>
            <h1>Blog</h1>

            <button
                onClick={() => {Router.goToRoute('/blogs')}}
            >Blogs</button>

            <button
                onClick={() => {
                    Router.goToRoute(`/blogs/${Router.routeAtIndex(2)}/posts/${new Date().getMilliseconds()}`)}}
            >Posts</button>

        </>

    );


};
