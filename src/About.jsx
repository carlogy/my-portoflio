import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer';

const About = () => {

    return (
        <div>
        <div className='top-container'>

          <h1>About Me</h1>


        </div>
        <div className='middle-container'>

        <h2> My name is Carlo and I have a deep passion for technology, traveling, reading, video games, and anime.</h2>

        <h3>Traveling</h3>

        <p className='descriptions'>Travel highlights coming soon!</p>

        <hr/>



        <h3>Reading</h3>
        <p className='descriptions'>Favorite books and genre's coming soon</p>

        <hr/>
        {/* <h2>Traveling</h2>
        <p >
          I love to travel! Check out some of my highlights from around the globe!
        </p>
        <h3>Photos coming soon!</h3> */}

        <h3> Full Bio Coming Soon! </h3>

        <div>
        <Link to="/" className="btn">Back</Link>
        </div>

        </div>
        <div className='bottom-container'>

          <Footer />
        </div>
        </div>

    );

}

export default About;