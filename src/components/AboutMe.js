import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Info über mich</h1>
          <p>
            Herzlich Willkommen!
            Ich bin Abdullah Ourfali, Informatik Student an der TU Dortmund. Nebentätig in der Softwareentwicklung bei Compass Software.
            Frameworks und Technologien: ThreeJS, AngularJS und ReactJS. 
            Grundkenntnisse in den Programiersprachen: C, C#, JavaScript und Python. und gute Kentnisse in C++ und Java.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
