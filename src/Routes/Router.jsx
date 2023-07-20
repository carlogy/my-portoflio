import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from '../About'
import Home from '../Home';
import Projects from '../Projects';

const Router = () => {
  return (
    <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About}/>
            <Route path="/projects" Component={Projects} />
    </Routes>
  )
}

export default Router