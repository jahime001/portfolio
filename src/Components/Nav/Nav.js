import React, { useState } from "react";
import "./Nav.css";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import { Link } from "react-scroll";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { TfiMenu, TfiClose } from "react-icons/tfi";

function Nav() {
  let currentWidth = window.innerWidth;
  const [showNav, setShowNav] = useState(false);
  const handleShowNavbar = () => {
    setShowNav(!showNav);
  };

  if (currentWidth > 600) {
    return (
      <div className="nav">
        <div className="logo">
          <h1>Jahime's</h1>
          <h3>Portfolio</h3>
        </div>

        <div className="nav-links">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
            <div class="underline"></div>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About Me
            <div class="underline"></div>
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Skills
            <div class="underline"></div>
          </Link>
          <Link
            to="showcase"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Project Showcase
            <div class="underline"></div>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact Info
            <div class="underline"></div>
          </Link>
        </div>

        <main>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    );
  } else {
    return (
      <div className="nav">
        <div className="logo">
          <h1>Jahime's</h1>
          <h3>Portfolio</h3>
        </div>

        <div className="nav-opener">
          {/* <a href="https://www.linkedin.com/in/jahimecameau/" target="blank">
            <AiFillLinkedin className="floater-nav" />
          </a>
          <a href="https://github.com/jahime001" target="blank">
            <AiFillGithub className="floater-nav" />
          </a> */}
          {showNav === false ? (
            <TfiMenu className="nav-opener-icon" onClick={handleShowNavbar} />
          ) : (
            <TfiClose
              className="nav-opener-icon"
              onClick={handleShowNavbar}
              style={{ color: "black" }}
            />
          )}
        </div>
        <div className={`side-blur ${showNav && "active"}`}></div>
        <div className={`sidenav ${showNav && "active"}`}>
          <div className="nav-links-ham">
            <Link
              activeClass="active"
              onClick={handleShowNavbar}
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
              <div class="underline"></div>
            </Link>
            <Link
              activeClass="active"
              onClick={handleShowNavbar}
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About Me
              <div class="underline"></div>
            </Link>
            <Link
              activeClass="active"
              onClick={handleShowNavbar}
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Skills
              <div class="underline"></div>
            </Link>
            <Link
              activeClass="active"
              onClick={handleShowNavbar}
              to="showcase"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
              <div class="underline"></div>
            </Link>
            <Link
              activeClass="active"
              onClick={handleShowNavbar}
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact Info
              <div class="underline"></div>
            </Link>
          </div>
        </div>
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default Nav;
