import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from '../About'
import Home from '../Home';

const Router = () => {
  return (
    <Routes>
            <Route  path="/" Component={Home} />
            <Route path="/about" Component={About}/>
    </Routes>
  )
}

export default Router