import React from "react";
import {Router} from "@alto.js/routing";

export const BlogsView = () => {

    return (
        <>
            <h1>Blogs</h1>

            <button
                onClick={() => {Router.goToRoute('/home')}}
            >Home</button>

            <button
                onClick={() => {Router.goToRoute(`/blogs/${new Date().getMilliseconds()}`)}}
            >Blog</button>

            <button
                onClick={() => {Router.goToRoute('/foobar')}}
            >FooBar</button>
        </>

    );

};
