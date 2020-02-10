import React from "react";
import "../theme/core.module.css";
import SEO from "../components/seo";
import IntroBanner from "../components/intro-banner";
import WhyAlto from "../components/why-alto";
import FrameworkLayers from "../components/framework-layers";
import Footer from "../components/footer";

const IndexPage = () => (
    <div>

        <SEO
            title="Composable frameworks for React web applications"
            keywords={[`alto.js`, 'altojs', 'alto js', 'alto', `alto-react`, `alto-ui`, `alto-user-interface`,
                    'react.js', 'react', 'javascript', 'application framework']}/>

        <IntroBanner/>

        <WhyAlto/>

        <FrameworkLayers/>

        <Footer/>

    </div>
)

export default IndexPage
