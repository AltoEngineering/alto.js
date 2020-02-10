import React from 'react';
import { render } from "react-dom"
import {Routes} from "@alto.js/routing";
import {HomeView} from "./home_view";
import {BlogsView} from "./blogs_view";
import {BlogView} from "./blog_view";
import {UnknownView} from "./unknown_view";
import {PostsView} from "./posts_view";
import {PostView} from "./post_view";

const application = (
    <Routes>

        <HomeView path={'/index'}/>

        <HomeView path={'/home'}/>

        <BlogsView path={'/blogs'}>

            <BlogView path={'/:id'}>

                <PostsView path={'/posts'}>

                    <PostView path={'/:post_id'}/>

                </PostsView>

            </BlogView>

        </BlogsView>

        <UnknownView path={'/unknown'}/>

    </Routes>
);





