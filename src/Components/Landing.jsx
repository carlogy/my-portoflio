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
    <div class="top-container">
        <img class="sun" src={sun1} alt="sun-img"/>
        <h1>I'm Carlo.</h1>
        <h2>a  programmer.</h2>
        <img class="surfboards" src={surfboards}alt="surboards-img"/>
        <img class="beach-image" src={beach} alt="beach-img"/>
    </div>
    <div class="middle-container">
        <div class="profile">
          <img class="headshot" src={me1} alt="picture-of-me"/>
          <h2>Hello.</h2>
          <p class="intro">I'm a product manager/developer based in Jacksonville, Florida. I have a passion for technology and love to create for web and mobile devices.</p>
        </div>
        <hr/>
        <div class="skills">
          <h2>My Skills.</h2>
          <div class="skill-row">
            <img class="code-icon" src={code}title="code icons" alt="browser-window-icon"/>
            <h3>Web Development</h3>
            <p class="skillp">I am a web developer who loves problem-solving. I strive to deliver simple and elegant solutions.</p>
          </div>
          <div class="skill-row">
            <img class="pm-icon" src={pm} alt="person with thinking bubbles"/>
            <h3>Product Management</h3>
            <p class="skillp">I am an innovative Product Manager that empowers teams who creatively solve problems.
            With a passion for driving product vision and collaboration to deliver a great user experience through high-quality products.</p>
          </div>
        </div>
        <hr/>
        <div class="contact-me">
          <h2>Get In Touch</h2>
          <h3>I'm currently available for freelance work</h3>
          <p class="contact-message">Want to talk more about technology? Let's chat about all new things technology!</p>
          <a class="btn" href="mailto:carlogyannuzzi@gmail.com">CONTACT ME</a>
        </div>
      </div>


    </div>
  )
}

export default Landing