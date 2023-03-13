import React from "react";
import './Home.css';
import { Link } from 'react-scroll';
import pfp from './pfp.jpg'
import pfp2 from './pfp2.png'
import { BsArrowUpRight } from "react-icons/bs";
function Home(){

    return (
      <div className="home" id="home">
        <div className="home-container">
          <div className="welcome">
            <h1 className="name">
              Hi! I'm <br></br>Jahime Cameau
            </h1>
            <h2 className="desc">
              {" "}
              Full Stack Developer! <br></br>Learn more about me and my love for{" "}
              <span class="orange">technology!</span>
            </h2>
            <div className="home-links">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="home-link-1">Learn More</div>
              </Link>
              <div className="home-link-2">
                <a
                  href="https://www.linkedin.com/in/jahimecameau/"
                  target="blank"
                >
                  Let's Connect! <BsArrowUpRight className="home-link-2-arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="profile">
            <div className="img-container">
              <img src={pfp2} alt="Jahime" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home