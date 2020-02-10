import React from "react";
import {Router} from "@alto.js/routing";

export const HomeView = () => {

    return (
        <>
            <nav>
                <div>
                    <span>Application Root Toolbar</span>
                </div>
            </nav>

            <h1>Home</h1>

            <button
                onClick={() => {Router.goToRoute('/blogs')}}
            >Blogs</button>

            <button
                onClick={() => {Router.goToRoute('/foobar')}}
            >FooBar</button>
        </>

    );

};
