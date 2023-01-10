import React from "react";
import './Home.css';
import { GrContact } from 'react-icons/gr'
import { Link } from 'react-scroll';
import pfp from './pfp.jpg'

function Home(){

    return(
        <div className="home" id="home" >
        <div className="home-container">
        <div className="welcome">
            <h1 className="name" >Jahime <br></br>Cameau</h1>
            <h2 className="desc"> Full Stack Developer! <br></br>Learn more about me and my love for <span class="orange">technology!</span></h2>
            <div className="home-links">
               <Link to="about" spy={true} smooth={true} offset={-100} duration={500}><div className="home-link">Learn More</div></Link>
               <div className="home-link">Let's Connect!</div>
                </div>
        </div>
        <div className="profile">
                <div className="img-container">
                    <img src={pfp} alt="Profile Picture" />

                </div>
        </div>
        </div>
                     
        </div>
    )
}

export default Home