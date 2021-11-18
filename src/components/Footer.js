import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Business center, Wambeler Str. 39, 44145 Dortmund</p>
            </div>
            <div className="d-flex">
              <a href="tel:0160 8744 619">(+49) 160 8744 619</a>
            </div>
            <div className="d-flex">
              <p>a.ourfali@icloud.com</p>
            </div>
          </div>
         
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/abdullah-ourfali-027823209/"}
                quote={"Software Developer"}
                hashtag="#c++"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;AMO | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
