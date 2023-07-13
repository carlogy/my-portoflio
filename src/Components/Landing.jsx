import React from "react";

import sun1 from '../images/sun1.png';
import beach from '../images/beach.png';
import me1 from '../images/me1-modified.png';
import surfboards from '../images/surfboards.png';
import Skills from "./Skills";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";

function Landing() {
  return (
  <div>
    <div className="top-container">
        {/* <img className="sun" src={sun1} alt="sun-img"/> */}
        <h1>I'm Carlo.</h1>
        <h2>a  programmer.</h2>
        {/* <img className="surfboards" src={surfboards}alt="surboards-img"/>
        <img className="beach-image" src={beach} alt="beach-img"/> */}
    </div>
    <div class="middle-container">
        <div className="profile">
          <img className="headshot" src={me1} alt="picture-of-me"/>
          <h2>Hello.</h2>
          <p className="intro">I'm a product manager/developer based in Jacksonville, Florida. I have a passion for technology and love to create for web and mobile devices.</p>
          <div>
          <Link to="/about" className="btn">Bio</Link>
          </div>
        </div>
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Landing