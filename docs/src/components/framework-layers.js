import React from "react";
import css from "./framework-layers.module.css";
import {Link} from "gatsby";

const FrameworkLayers = () => {

    return (
        <section
            className={css.base}>

            <h3
                className={css.sectionTitle}>
                Key Framework Layers
            </h3>

            <div
                className={css.contentBounds}>

                <Link
                    className={css.card}
                    to={'/frameworks/user-interface'}>

                    <div
                        className={css.frameworkIconBounds}/>

                    <h2
                        className={css.frameworkTitle}>
                        User Interface
                    </h2>

                    <p
                        className={css.paragraph}>
                        Declaritive UI components paired with a rich design system, sketch file, and an easy to override
                        theme. Everything needed for a team to build a custom UI look without starting from scratch.
                    </p>


                </Link>

                <Link
                    className={css.card}
                    to={'/frameworks/data'}>

                    <div
                        className={css.frameworkIconBounds}/>

                    <h2
                        className={css.frameworkTitle}>
                        Data
                    </h2>


                    <p
                        className={css.paragraph}>
                        Multi-paradigm design patterns based on tried and true practices. As a whole, data provides a
                        feature complete data piping system for your applications needs.
                    </p>

                </Link>

                <Link
                    className={css.card}
                    to={'/frameworks/routing'}>

                    <div
                        className={css.frameworkIconBounds}/>

                    <h2
                        className={css.frameworkTitle}>
                        Routing
                    </h2>

                    <p
                        className={css.paragraph}>
                        Simplistic, straight forward routing built on-top of React hooks.
                    </p>

                </Link>

            </div>

        </section>
    )

};

export default FrameworkLayers;
