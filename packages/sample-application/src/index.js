import React from 'react';
import ReactDOM from 'react-dom';

import {HomeView} from "./home_view";
import {BlogsView} from "./blogs_view";
import {BlogView} from "./blog_view";
import {PostsView} from "./posts_view";
import {PostView} from "./post_view";
import {UnknownView} from "./unknown_view";
import {Routes} from "@alto.js/routing";

ReactDOM.render(
    <Routes>

        <PostsView path={'/blogs/:id/posts/:post_id/foo/bar/:baz'}>

            <PostView path={'/:post_id'}/>

        </PostsView>

        <HomeView path={'/index'}>

            <HomeView path={'/home'}>
                <div>
                    <span>Application Sub Toolbar</span>
                </div>
            </HomeView>

        </HomeView>

        <BlogsView path={'/blogs'}>

            <BlogView path={'/:id'} />

        </BlogsView>

        <PostsView path={'/blogs/:id/posts'}>

            <PostView path={'/:post_id'}/>

        </PostsView>

        <UnknownView path={'/unknown'}/>

    </Routes>
    , document.getElementById('root'));


/*

    /index = '', '/', '/index';  ------ renders application root toolbar, index render method,
    /index/home ------ renders application root toolbar, index render method, application sub toolbar, home render method

    /blogs  ------ blogs render method
    /blogs/:id ------ blogs render method, :id render method
    /blogs/:id/posts ------ posts render method
    /blogs/:id/posts/:post_id ------ posts render method, post_id render method



 */
