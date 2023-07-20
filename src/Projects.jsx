import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer';

const Projects = () => {

    return (

        <div className='top-container'>
        <div>
        <h1>Projects</h1>
        </div>
        <div className='middle-container'>
        <h2>My Projects</h2>
        <h3>More Projects Coming Soon!</h3>
        <div className='project-container'>
            <iframe className='task-frame' width={360} height={580} src='https://task-manager-carlogy.vercel.app/'></iframe>
        </div>
        </div>
        <div>
          <Link to="/" className="btn">Back</Link>
        </div>
        <Footer />
        </div>

    );

}

export default Projects;