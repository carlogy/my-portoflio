import React from 'react';
import { Link } from 'react-router-dom';
import CSVParser from './images/CSVParser resized.png'
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
                <p className='project-description'> Task Manager utilizing Nextjs, Reactjs, and TailwindCSS. Hosted on vercel.</p>
                <iframe className='project-frame' width={375} height={675} title='TaskManagerApp' src='https://task-manager-carlogy.vercel.app/'></iframe>
            </div>
            <div>
                <p className='project-description'>Blog webapp using Denojs, Preactjs, and Twind. It utilizes Deno KV DB. Hosted on Deno.land.</p>
                <iframe className='project-frame' width={375} height={675} title='Blog website' src='https://carlogyblog.deno.dev/'></iframe>
            </div>
            <div>
                <p className='project-description'>Random Quote Generator utilizing Nextjs, Reactjs, and TailwindCSS Hosted on Vercel.</p>
                <iframe className='project-frame' width={375} height={675} title='RandomQuoteGenerator' src='https://random-quote-generator-carlogy.vercel.app/'></iframe>
            </div>
            <div>
            <p className='project-description'>A C# console app that parses files for keywords and generates a filtered file and saves it to a file path of choice.
            <a className='link' href="https://github.com/carlogy/CsvFileParser"> Repo Here</a>
            </p>
            <img className='project-frame' width={375} height={675} title='CSVParsing Program' src={CSVParser}></img>
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