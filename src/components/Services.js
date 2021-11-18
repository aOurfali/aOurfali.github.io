import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>WebShop Design</h3>
              <p>Ich gehe jedes Projekt individuell an und fokussiere mich immer auf das Ergebnis.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Web Development</h3>
              <p>Ihre Website wird mit React JS- oder PHP-Technologien erstellt.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>

              <h3>Facebook Ads </h3>
              <p>Ihre potenziellen Kunden können Ihre Dienstleistungen oder Ihr Produkt auf Facebook besser sehen</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>

              <h3>Google Ads</h3>
              <p>Ihr Service und Ihre Produkte werden oben in der Google-Suche angezeigt</p>.
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
