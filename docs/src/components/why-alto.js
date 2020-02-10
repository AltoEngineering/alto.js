import React from "react";
import css from "./why-alto.module.css";

const WhyAlto = () => {

    return (
        <section
            className={css.base}>

            <h3
                className={css.sectionTitle}>
                Why alto.js?
            </h3>

            <p
                className={css.paragraph}>
                In short, Alto provides an out of the box solution for every layer in a React Web Application.
                Every api choice, design pattern, and decision revolves around three principles: achieve the best
                performance possible, maintain flexibility if/when a layer does not meet the criteria of
                an engineer, team, or organization, and provide clear design patterns for common tasks used when building
                web applications.
                <br/>
                <br/>
                Performance is an interesting subject in the tech industry and one that deserves more attention. Therefore,
                all layers in alto will be accompanied by thorough reports of how they work, what is the cost of operation,
                and how do they compare to other solutions. We hope this approch at best starts a conversation about current
                industry standards, their exact performance, and how we move forward when introducing future design patterns
                to the web community.
                <br/>
                <br/>
                Flexibility is achieved by adhering to the platform as much as possible. Before any custom pattern is
                considered, an exhaustive consideration from standardized features within React.js, JavaScript, and CSS
                are used.
                <br/>
                <br/>
                Well structured code and clear design patterns take the guess work out of day to day tasks. Furthmore,
                by forming an opinionated approch to how layers connect, where specific logic lives, and what patterns
                are used directly impacts an engineers experience and expectations across multiple applications, business
                verticals, and teams. The end result is highly aligned developers within an organization or community
                can deliver higher quality solutions at a faster rate than one with indefinite or vague design patterns.
            </p>

        </section>
    )

};

export default WhyAlto;
