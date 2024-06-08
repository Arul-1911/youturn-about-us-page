import React from "react";
import '../../../../styles/about_us_styles/about_us_header.css'

function About_us_header() {
  return (
    <div>
      <div className="about_us_header_container">
        <div className="about_us_header_title_container">
          <p className="about_us_header_title_location">Home {">"} About</p>
          <h1 className="about_us_header_title">About</h1>
        </div>
        <div className="about_us_header_description">
          We’re a small, dedicated group of people with a passion for real
          journalism. YouTurn is a part of People Educational Awareness Trust –
          Non-profitable education and awareness trust. It a legally
          <span className="aboust_us_header_registered">  registered  </span>
          organization that is set up exclusively for the purpose of
          fact-checking.
        </div>
      </div>
    </div>
  );
}

export default About_us_header;
