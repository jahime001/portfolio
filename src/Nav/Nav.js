import React from "react";
import './Nav.css'
import { Route, Routes, Link } from "react-router-dom";
import About from "../About/About";

function Nav(){
    return(
        <>
        <nav>
                <Link to='/about'><a>About Me</a></Link>
                <a href="#">Skills</a>
                <a href="#">Contact Info</a>
                <a href="#">Resume</a>
                <Link to='/projects'><a>Project Showcase</a></Link>
        </nav>
        <main>
                <Routes>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </main>
        </>
    )
}

export default Nav