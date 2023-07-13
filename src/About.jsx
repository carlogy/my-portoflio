import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer';

const About = () => {

    return (

        <div className='top-container'>
        <div>
        <h1>About Me</h1>
        </div>
        <div className='middle-container'>
        <h2>My name is Carlo. I am have a deep passion for technology.</h2>
        <h3>Full Bio Coming Soon!</h3>
        </div>
        <div>
          <Link to="/" className="btn">Back</Link>
        </div>
        <Footer />
        </div>

    );

}

export default About;