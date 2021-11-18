import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2021</h3>
            <p> Informatik Student an der TU Dortmund.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>Java-WebApp mit DB2-Datenbank und Java-Servlet-Komponente und XML-Anwendungsprogrammierschnittstelle und CRUD-WebApp mit PHP-Skriptsprache und MySQL-Server. </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>Webanwendung mit ThreeJS und AngularJS, die 3D-Modelle im Internet-Browser anzeigen und teilweise bearbeiten kann</p>
          </div>
        </div>
    
      </div>
    </div>
  )
}

export default Experience;
