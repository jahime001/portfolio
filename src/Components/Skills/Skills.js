import React, {useState} from 'react'
import './Skills.css'
import {
  FaJsSquare,
  FaReact,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaBootstrap,
} from "react-icons/fa";
import { DiMongodb } from 'react-icons/di'
import { GiComputerFan } from "react-icons/gi";
import { BiErrorAlt } from "react-icons/bi";
import {
  BsFillCpuFill,
  BsWrench,
} from "react-icons/bs";
import { SiExpress, SiPostgresql, SiDjango, SiFirebase } from 'react-icons/si'
export default function Skills() {
  const [myclass, setmyClass] = useState("hide");
  let currentWidth = window.innerWidth;
  let scroll = 0;
  if (currentWidth > 600) {
    scroll = 800;
  } else {
    scroll = 50;
  }
  let handleShow = () => {
    const y = window.scrollY;
    if (y >= scroll) {
      setmyClass("show1");
    } else {
      setmyClass("hide1");
    }
  };
  window.addEventListener("scroll", handleShow);
   
  return (
    <div className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-overlap"></div>
        <div className="skills-floater">
          <div className="skills-upper">
            <h1>Skills</h1>
          </div>
          <div className="skills-lower">
            <div className="skills-frontend">
              <div className="skill-title">
                <h1>Front End</h1>
              </div>
              <div className="skill-list">
                <div className={`${myclass}`} style={{ transition: "all 1s" }}>
                  <FaJsSquare color="f7df1e" className="icon" />
                  <p>Javascript</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 2s" }}>
                  <FaReact color="00d8ff" className="icon" />
                  <p>React</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 2.5s" }}>
                  <FaCss3 color="264de4" className="icon" />
                  <p>Css</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 2.7s" }}>
                  <FaHtml5 color="e34f26" className="icon" />
                  <p>Html</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 3s" }}>
                  <FaBootstrap color="purple" className="icon" />
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className="skills-backend">
              <div className="skill-title">
                <h1>Back End</h1>
              </div>
              <div className="skill-list">
                <div className={`${myclass}`} style={{ transition: "all 1s" }}>
                  <FaNodeJs color="215732" className="icon" />
                  <p>Node.js</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
                  <DiMongodb color="3FA037" className="icon" />
                  <p>MonogDB</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 2s" }}>
                  <SiExpress color="808080" className="icon" />
                  <p>Express.js</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 2.3s" }}>
                  <FaPython color="#4584B6" className="icon" />
                  <p>Python</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 2.5s" }}>
                  <SiPostgresql color="336791" className="icon" />
                  <p>PostgreSQL</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 2.7s" }}>
                  <SiDjango color="#092e20" className="icon" />
                  <p>Django</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 3s" }}>
                  <SiFirebase color="orange" className="icon" />
                  <p>Firebase</p>
                </div>
              </div>
            </div>
            <div className="skills-computer">
              <div className="skill-title">
                <h1>Computer</h1>
              </div>
              <div className="skill-list">
                <div className={`${myclass}`} style={{ transition: "all 1s" }}>
                  <BsFillCpuFill color="blue" className="icon" />
                  <p>Computer Assembly</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 2.5s" }}>
                  <GiComputerFan color="green" className="icon" />
                  <p>Equipment Modification</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 2.7s" }}>
                  <BiErrorAlt color="red" className="icon" />
                  <p>Machinery Repairs</p>
                </div>
                <div className={`${myclass}`} style={{ transition: "all 3s" }}>
                  <BsWrench color="gray" className="icon" />
                  <p>Troubleshooting</p>
                </div>
              </div>
            </div>
          </div>

          {/* 
          <div>
            <FaNodeJs color="215732" className="icon" />
            <p>Node.js</p>
          </div>
          <div>
            <DiMongodb color="3FA037" className="icon" />
            <p>MonogDB</p>
          </div>
          <div>
            <SiExpress color="808080" className="icon" />
            <p>Express.js</p>
          </div>
          <div>
            <FaPython color="#4584B6" className="icon" />
            <p>Python</p>
          </div>
          <div>
            <SiPostgresql color="336791" className="icon" />
            <p>PostgreSQL</p>
          </div>
          <div>
            <SiDjango color="#092e20" className="icon" />
            <p>Django</p>
          </div>
          <div>
            <SiFirebase color="orange" className="icon" />
            <p>Firebase</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
