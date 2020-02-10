import React from "react";
import css from './intro-banner.module.css';
import AltoIcon from "./alto-icon";
import {Link} from "gatsby";

const IntroBanner = () => {

    return (
        <main
            className={css.base}>

            <div>

                <span
                    className={css.strip6}/>

                <span
                    className={css.strip5}/>

                <span
                    className={css.strip4}/>

                <span
                    className={css.strip3}/>

                <span
                    className={css.strip2}/>

                <span
                    className={css.strip1}/>

            </div>

            <nav
                className={css.navigation}>

                <div
                    className={css.iconFrame}>

                    <AltoIcon/>

                </div>

            </nav>

            <div
                className={css.headlineBounds}>

                <h1
                    className={css.headline}>
                    alto.js
                </h1>

                <h2
                    className={css.tagline}>
                    Performant, Composable, <br/> All-in-One architecture for React web applications
                </h2>

                <div
                    className={css.actionItemsBounds}>

                    <Link
                        className={css.primaryButton}
                        to="/page-2/">
                        Get Started
                    </Link>

                    <Link
                        className={css.secondaryButton}
                        to="/page-2/">
                        Learn More
                    </Link>

                </div>

            </div>


        </main>
    )

};

export default IntroBanner;
