import React from "react";
import SEO from "../../components/seo";
import NavigationBar from "../../components/navigation-bar";
import css from "./routing.module.css";

const RoutingPage = () => {

    return (
        <>
            <SEO
                title="Routing Library"
                keywords={[`alto.js`, 'altojs', 'alto js', 'alto', `alto-react`, `alto-ui`, `alto-user-interface`,
                    'react.js', 'react', 'javascript', 'application framework']}/>

            <NavigationBar/>

            <div
                className={css.contentBounds}>

                <div
                    className={css.frameworkIconBound}/>

                <div
                    className={css.textSection}>

                    <h3
                        className={css.sectionTitle}>
                        Introduction
                    </h3>

                    <p
                        className={css.paragraph}>
                        Routing provides you with everything route related and will never be a bottleneck in your applications
                        performance.
                        <br />
                        <br />
                        Built on top of React’s Hook api. The Routing framework takes a declarative approach to defining your
                        applications routes. Its primary objective is to provide a high performing solution as the foundation
                        of your application. This performance conscious approach guaranties when a route change occurs, only
                        the related components in your dom tree will be traversed. Meaning, the performance of a route change
                        is identical to the length of your url.
                        <br />
                        <br />
                        Routing exposes an api for observing route changes in any component without prop drilling and without
                        wrapping a view in a higher-order component. Furthermore and when necessary, Routing provides a
                        programmatic api for making route changes.
                    </p>

                </div>

                <div
                    className={css.textSection}>

                    <h3
                        className={css.sectionTitle}>
                        Defining Routes
                    </h3>

                    <p
                        className={css.paragraph}>
                        When defining your applications routes, the recommendation is to declare your route paths
                        towards the top of your dom tree. Within your applications initial render method is ideal.
                        Below is an example.
                    </p>

                </div>

            </div>

        </>
    )

};

export default RoutingPage;
