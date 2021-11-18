import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Software und Web-Entwicklung</h1>
        <Typed
          className="typed-text"
          strings={["Softwareentwicklung", "Webentwicklung", "Facebook Ads", "Google Ads"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  )
}

export default Header;
