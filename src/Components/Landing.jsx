import React from "react";

import sun1 from '../images/sun1.png';
import beach from '../images/beach.png';
import cloud from '../images/cloud.png';
import code from '../images/code.png';
import me1 from '../images/me1-modified.png';
import pm from '../images/product-management.png';
import surfboards from '../images/surfboards.png';

function Landing() {
  return (
    <div>
    <div className="top-container">
        <img className="sun" src={sun1} alt="sun-img"/>
        <h1>I'm Carlo.</h1>
        <h2>a  programmer.</h2>
        <img className="surfboards" src={surfboards}alt="surboards-img"/>
        <img className="beach-image" src={beach} alt="beach-img"/>
    </div>
    <div class="middle-container">
        <div className="profile">
          <img className="headshot" src={me1} alt="picture-of-me"/>
          <h2>Hello.</h2>
          <p className="intro">I'm a product manager/developer based in Jacksonville, Florida. I have a passion for technology and love to create for web and mobile devices.</p>
        </div>
        <hr/>
        <div className="skills">
          <h2>My Skills.</h2>
          <div className="skill-row">
            <img className="code-icon" src={code}title="code icons" alt="browser-window-icon"/>
            <h3>Web Development</h3>
            <p className="skillp">I am a web developer who loves problem-solving. I strive to deliver simple and elegant solutions.</p>
          </div>
          <div className="skill-row">
            <img className="pm-icon" src={pm} alt="person with thinking bubbles"/>
            <h3>Product Management</h3>
            <p className="skillp">I am an innovative Product Manager that empowers teams who creatively solve problems.
            With a passion for driving product vision and collaboration to deliver a great user experience through high-quality products.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Landing