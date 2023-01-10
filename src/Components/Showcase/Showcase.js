import React from 'react'
import './Showcase.css'
import websites from './showcase.json'
import { BsGithub } from 'react-icons/bs'
import { GoLink } from 'react-icons/go'
import { BsFillCircleFill } from 'react-icons/bs';


export default function Showcase() {
  return (
    <div className='showcase'>
              <div className='case-header'>
                <h1>My Projects</h1>
              </div>
              <div className='projects'>
                {websites.map(website =>{
                    return(
                      <div className='project-container'>
                    <div className='project-info'>
                        <div className='project-header'>
                            <div className='project-title'>
                              <h1>{website.title}</h1>
                            </div>
                            <div className='project-links'>
                              <a href={website.github} target='blank'><BsGithub className='gitlink'/></a>
                              <a href={website.website} target='blank'><GoLink className='weblink'/></a>
                            </div>
                        </div>
                        <div className='project-desc'>
                          <h2>{website.description}</h2>
                        </div>
                        <div className='project-tech'>
                          {website.tech.map(x => {
                            return <p>{x}</p>
                          })}
                        </div>
                    </div>

                    <div className='project-sc'>
                          <div className='window'>
                             <div className='window-nav'>
                              <div className='circle'>
                                  <BsFillCircleFill style={{color: "red"}} />
                                <BsFillCircleFill  style={{color: "yellow"}} />
                                <BsFillCircleFill  style={{color: "00e000"}}/>
                              </div>
                             </div>
                             <div className='window-sc' style={{ backgroundImage: `url(${website.screenshot})`, backgroundPosition: "center", backgroundSize: "100%, 100%"}}></div>
                          </div>
                    </div>
                </div>
                    )
                })}
                
              </div>
    </div>
   
  )
}
