import React, { useEffect, useState } from "react";
import './Nav.css'
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from 'react-scroll';

function Nav() {



    return (
        <div className='nav'>
            <div className="logo">
                <h1>Jahime's</h1>
                <h3>Portfolio</h3>
            </div>
           
            <div className="nav-links">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500}><a>Home</a></Link>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500}><a>About Me</a></Link>
                <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}><a href="#">Skills</a></Link>
                <Link to='showcase' spy={true} smooth={true} offset={-100} duration={500}><a>Project Showcase</a></Link>
                <a href="#">Contact Info</a>
                <a href="https://docs.google.com/document/d/16rDeAAa-y5AFHv2ngGRZWnroX6hTYRioxZUy8RzuQtc/edit?usp=sharing">Resume</a>
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