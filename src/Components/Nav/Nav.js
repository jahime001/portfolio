import React from "react";
import './Nav.css'
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import { Link } from 'react-scroll';

function Nav() {



    return (
        <div className='nav'>
            <div className="logo">
                <h1>Jahime's</h1>
                <h3>Portfolio</h3>
            </div>
           
            <div className="nav-links">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About Me</Link>
                <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
                <Link to='showcase' spy={true} smooth={true} offset={-100} duration={500}>Project Showcase</Link>
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact Info</Link>
                <a href="https://docs.google.com/document/d/16rDeAAa-y5AFHv2ngGRZWnroX6hTYRioxZUy8RzuQtc/edit?usp=sharing" target='blank'>Resume</a>
            </div>


            <main>
                <Routes>
                    <Route path='/about' element={<About />} />
                </Routes>
            </main>
        </div>
    )
}

export default Nav