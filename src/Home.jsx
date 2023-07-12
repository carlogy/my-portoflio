import './App.css';
import React from 'react';
import logo from './logo.svg';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Contact from './Components/Contact';






const Home = () => {
    return (
        <div>

            <Landing />
            <Contact />
            <Footer/>
        </div>

    );
}



export default Home;