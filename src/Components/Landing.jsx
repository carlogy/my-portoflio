import React from "react";
import me1 from '../images/me1-modified.png';
import Skills from "./Skills";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";

function Landing() {
  return (
  <div>
    <div className="top-container">

        <h1>I'm Carlo.</h1>
        <h2 className="intro-header">   a software engineer.</h2>

    </div>
    <div className="middle-container">
        <div className="profile">
          <img className="headshot" src={me1} alt="headshot"/>
          <h2>Hello.</h2>
          <p className="intro"> I'm a product manager at SS&C technologies based in Jacksonville, Florida.
          With a passion for technology that has led me to learn web development.
          For more about me visit my Bio.
          </p>
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