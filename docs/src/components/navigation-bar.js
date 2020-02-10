import React from "react";
import css from "./navigation-bar.module.css";
import AltoIcon from "./alto-icon";
import {Link} from "gatsby";

const NavigationBar = () => {

    return (
        <nav
            className={css.navigation}>

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

            <div
                className={css.iconFrame}>

                <Link
                    to={'/'}>

                    <AltoIcon/>

                </Link>

            </div>

            <div>

                <h1
                    className={css.pageTitle}>
                    Frameworks/Routing
                </h1>

            </div>

        </nav>
    )

};

export default NavigationBar;
