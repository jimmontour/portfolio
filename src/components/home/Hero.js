import React, { useEffect } from 'react';
import Typist from 'react-typist';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import HeroStyles from '../../styles/HeroStyles';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
     useEffect(() => {
       AOS.init();
     }, []);

  return (
    <HeroStyles className="bg-style bg-gradient" id="hero">
      <div
        className="hero bg-gradient bg-style"
        style={{
          background: `linear-gradient(136deg, #448, #4484ce, #ff9b11, #9b59b6, #ff7f7f)`,
          backgroundSize: "1200%, 1200%",
        }}
      >
        <div id="stars" />

        <div className="title layout">
          <h1 data-aos="fade-right" data-aos-once="true">
            Jim Montour
          </h1>
          <Typist className="lead typist" cursor={{ show: true }}>
            Full Stack Web Developer, all around nice guy...
          </Typist>
          <div
            className="social-buttons"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <a
              href="https://www.github.com/jimmontour"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon"
            >
              <FaGithub size={40} className="header-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/jimmontour"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon"
            >
              <FaLinkedin size={40} className="header-icon" />
            </a>
            <a
              href="https://www.twitter.com/jimmontour"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon"
            >
              <FaTwitter size={40} className="header-icon" />
            </a>
          </div>
          <a
            data-aos="fade-up"
            data-aos-once="true"
            href="/#projects"
            aria-label="Learn more about me"
            className="hero-button"
          >
            See Projects
          </a>
        </div>
      </div>
    </HeroStyles>
  );
}
