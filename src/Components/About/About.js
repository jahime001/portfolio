import React from "react";
import './About.css';
import { useState } from "react";
import memoji from './memoji.png'

function About() {
const [myclass, setmyClass] = useState('hide')
let currentWidth = window.innerWidth;
let scroll = 0
  if (currentWidth > 600) {
    scroll = 300
  } else {
    scroll = 50
   }
  let handleShow = () => {
    const y = window.scrollY;
    if (y >= scroll) {
      setmyClass("show")
    } else {
      setmyClass("hide")
    }
  }
window.addEventListener("scroll", handleShow);

    return (
      <div className="about" id="about">
        <div className="about-container">
          <div className="about-left">
            <div
              className={`about-text ${myclass}`}
              style={{ transition: "all 1.5s" }}
            >
              <h1>About Me</h1>
              <h3>
                <em>Web Developer</em> <span>|</span> <em>Music Producer</em>{" "}
                <span>|</span> <em>Computer Enthusiast</em>{" "}
              </h3>
              <p>
                I'm a full-stack developer who's passion for tech, computers and
                problem solving is expressed through workflow and dedication in
                building user-friendly web applications and helping build
                solutions with the skills learned as a General Assembly fellow!
              </p>
              <p>
                When i'm not coding I like to produce music. I'm also really
                into computers and how they work. I've learned how to build them
                and have built multiple for friends, family and clients. I enjoy
                keeping up with latest innovations in the computer space!
              </p>
            </div>
          </div>
          {currentWidth > 600 &&
            <div className="about-right">
              <img src={memoji} alt="memoji" className="memoji"/>
            </div>
          }
        </div>
      </div>
    );
}

export default About