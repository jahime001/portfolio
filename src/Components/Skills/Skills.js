import React, { useState } from 'react'
import './Skills.css'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FaJsSquare, FaReact, FaCss3, FaHtml5, FaNodeJs, FaPython } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { SiExpress, SiPostgresql, SiDjango } from 'react-icons/si'
export default function Skills() {
      const [myclass, setmyClass] = useState('hide')

  let handleShow = () => {
    const y = window.scrollY;
    if (y >= 1200) {
      setmyClass("show")
    } else {
      setmyClass("hide")
    }
  }
  window.addEventListener("scroll", handleShow);
  return (
    <div className='skills' id='skills'>
      
      <div className={`icons  ${myclass}`} style={{ transition: "all 1.5s" }}>
      <div><FaJsSquare color='f7df1e' className='icon'/> <p>Javascript</p></div>
      <div><FaReact color='00d8ff' className='icon'/><p>React</p></div>
      <div><FaCss3 color='264de4' className='icon'/><p>Css</p></div>
      <div><FaHtml5 color='e34f26' className='icon'/><p>Html</p></div>
      <div><FaNodeJs color='215732' className='icon'/><p>Node.js</p></div>
      <div><DiMongodb color='3FA037' className='icon'/><p>MonogDB</p></div>
      <div><SiExpress color='808080' className='icon'/><p>Express.js</p></div>
      <div><FaPython color='#4584B6' className='icon'/><p>Python</p></div>
      <div><SiPostgresql color='336791'className='icon'/><p>PostgreSQL</p></div>
      <div><SiDjango color='#092e20' className='icon'/><p>Django</p></div>
      </div>
      
    </div>
  )
}
