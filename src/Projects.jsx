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
            <div>
                <p className='project-description'> Task Manager web application using Nextjs, Reactjs, and TailwindCSS. This application is hosted on vercel.</p>
                <iframe className='project-frame' width={360} height={600} title='TaskManagerApp' src='https://task-manager-carlogy.vercel.app/'></iframe>
            </div>
            <div>
                <p className='project-description'>Blog webapp using Denojs, Preactjs, Twind for TailwindCSS, utilizing Deno KV DB. This application is hosted on Deno.land. </p>
                <iframe className='project-frame' width={360} height={600} title='Blog website' src='https://carlogyblog.deno.dev/'></iframe>
            </div>


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