import React from "react";
import './Home.css';
import { Link } from 'react-scroll';
import { BsArrowUpRight } from "react-icons/bs";

function Home(){

    return (
      <div className="home" id="home">
        <div
          className="home-container"
          style={{
            // backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "100%, 100%",
            backgrounFfilter: "blur(8px)",
          }}
        >
          <div className="welcome">
            <div className="title">
              <div className="title-line-1">
                <span>Hello! I Am</span>{" "}
              </div>
              <div className="title-line-2">Jahime Cameau</div>
            </div>
            <h2 className="desc">
              {" "}
              <span className="position-title">Full Stack Developer</span>
              <br></br>Creating solutions one line of code at a time!{" "}
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
                  href="https://drive.google.com/file/d/1gp66W6KmfGkLoNgRpjF5ePS2z3h4g4O5/view?usp=sharing"
                  target="blank"
                >
                  My Resume <BsArrowUpRight className="home-link-2-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home