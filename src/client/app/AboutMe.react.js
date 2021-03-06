import React from 'react';

import { t } from "./Translations";

class AboutMe extends React.Component {

  constructor(props){
    super(props);
  }
  
  render () {
    const { locale } = this.props;
    return (
      <div className="about-me-default-primary-color w3-container">
        <div className="w3-padding-64 w3-center">
          <h1 className="about-me-text-primary-color">{t(locale, "about_me_title")}</h1>
          <div className="about-me-text-primary-color w3-padding-xxlarge">
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;