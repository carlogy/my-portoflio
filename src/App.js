import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";

const App = () => {
      return (
        <div className="App">
          <div>
            {/* <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav> */}

          </div>
            <Routes>
            <Route  path="/" Component={Home} />
            {/* <Route path="/about" Component={About}/> */}

          </Routes>
          </div>
            );
  }

export default App;