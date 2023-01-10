import React from "react";
import './About.css';
import mypc from './mypc.png'
import code from './code.jpeg'
import mymusic from './mymusic.jpeg'
import { useState } from "react";


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
        <div className="about" id='about'>
            <div className="about-container">
                <div className="about-header">
                <h1>About Me</h1>
                </div>
                <div className="about-p">
                    <p>Hi! I'm a 19 year old full-stack developer who's passion for tech, computers and problem solving is expressed through workflow and dedication in building user-friendly web applications and helping push tech foward with the skills learned as a General Assembly fellow!</p>
                </div>
                <div className="hobbies">
                    <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
                        <div className="box-header" style={{ backgroundImage: `url(${mypc})`, backgroundPosition: "center", backgroundSize: "100%, 100%"}}></div>
                        <div className="box-text">
                        <h3>Computer Enthusiast</h3>
                        <p>I enjoy building computers and learning more about the growing industry. I've built my own pc and have built/fixed multiple for clients, friends and family. What i enjoy the most about it is the process because no pc is the exact same.</p>
                        </div>
                    </div>

                    <div className={`${myclass}`} style={{ transition: "all 2s" }}>
                            <div className="box-header" style={{ backgroundImage: `url(${mymusic})`, backgroundPosition: "center", backgroundSize: "100%, 100%"}}></div>
                        <div className="box-text">
                                <h3>Music Producer</h3>
                                <p>In 2018 I took up learning how to produce music. I started by making hip-hop beats but soon tranfered over to making Kompa, a dance music genre of Haiti. Over the years i've learned to replicate live instruments such as guitars and drums on the keyboard as kompa is a live instrument based genre.</p>
                        </div>
                    </div>

                    <div className={`${myclass}`} style={{ transition: "all 2.5s" }}>
                            <div className="box-header" style={{ backgroundImage: `url(${code})`, backgroundPosition: "center", backgroundSize: "100%, 100%"}}></div>
                        <div className="box-text">
                        <h3>Software Developer</h3>
                        <p>I've always been into the hardware side of tech so I decided to give software a chance and i loved it. I started taking small HTML and CSS classes until I enrolled into General Assembly where I recieved 400+ hours of hands-on software engineering learning!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About