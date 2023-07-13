import React from 'react';
import pm from '../images/product-management.png';
import code from '../images/code.png';

function Skills() {
  return (
    <div className="skills">
    <hr/>
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
  )
}

export default Skills;