import React from "react";
import './About.css';
import mypc from './mypc.png'
import code from './code.jpeg'
import mymusic from './mymusic.jpeg'
import { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";


function About() {
const [myclass, setmyClass] = useState('hide')

  let handleShow = () => {
    const y = window.scrollY;
    if (y >= 600) {
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
            <div className="about-text">
              <h1>About Me</h1>
              <h3>
                <em>Web Developer</em> <span>|</span> <em>Music Producer</em>{" "}
                <span>|</span> <em>Computer Enthusiast</em>{" "}
              </h3>
              <p>
                I'm a full-stack developer who's passion for tech, computers and
                problem solving is expressed through workflow and dedication in
                building user-friendly web applications and helping build solutions with the skills learned as a General Assembly fellow!
                        </p>
                        <p>
                            When i'm not codding I like to produce music. I'm also really into computers and how they work. I've learned how to build them and have built multiple for friends, family and clients. I enjoy keeping up with latest innovations in the computer space!
                        </p>
            </div>
          </div>
          <div className="about-right"></div>
        </div>
      </div>
    );
}

export default About