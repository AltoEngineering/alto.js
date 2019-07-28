const React = require('react');

const __index = (props) => {
    const {config, language = ''} = props;
    const {baseUrl, docsUrl} = config;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => {
        return (
            <div
                className="homeContainer">

                <div
                    className="homeSplashFade">

                    <div
                        className="wrapper homeWrapper">
                        {props.children}
                    </div>

                </div>

            </div>
        )
    };

    const Logo = (props) => {
        return (
            <div
                className="projectLogo">

                <img
                    src={props.img_src}
                    alt="Project Logo" />

            </div>
        )
    };

    const ProjectTitle = () => {
        return (
            <h2
                className="projectTitle">

                {config.title}

                <small>
                    {config.tagline}
                </small>

            </h2>
        )
    };

    const PromoSection = (props) => {
      return (
          <div
              className="section promoSection">

              <div
                  className="promoRow">

                  <div
                      className="pluginRowBlock">
                      {props.children}
                  </div>

              </div>

          </div>
      )
    };

    const Button = (props) => {
        return (
            <div
                className="pluginWrapper buttonWrapper">

                <a
                    className="button"
                    href={props.href}
                    target={props.target}>

                    {props.children}

                </a>

            </div>
        )
    };

    const HomeSplash = () => {

        return (
            <SplashContainer>

                <Logo
                    img_src={`${baseUrl}img/undraw_monitor.svg`} />

                <div
                    className="inner">

                    <ProjectTitle
                        siteConfig={config} />

                    <PromoSection>

                        <Button
                            href="#try">Try It Out</Button>

                        <Button
                            href={docUrl('doc1.html')}>Example Link</Button>

                        <Button
                            href={docUrl('doc2.html')}>Example Link 2</Button>

                    </PromoSection>

                </div>

            </SplashContainer>
        )

    };

    return (
        <div>

            <HomeSplash
                siteConfig={config}
                language={language} />

        </div>
    )

}

module.exports = __index;
