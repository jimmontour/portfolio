import React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import HeroStyles from '../../styles/HeroStyles';

export default function Hero() {
  return (
    <HeroStyles className="bg-style bg-gradient">
      <div
        className="hero bg-gradient bg-style"
        style={{
          background: `linear-gradient(136deg, #448, #4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f)`,
          backgroundSize: '1200%, 1200%',
        }}
      >
        <div id="stars" />

        <div className="title layout">
          <h1>Jim Montour</h1>
          <Typist className="lead typist" cursor={{ show: true }}>
            Full Stack Web Developer, all-around nice guy...
          </Typist>
          <div className="social-buttons">
            <a
              href="https://www.github.com/jimmontour"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} className="header-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/jimmontour"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} className="header-icon" />
            </a>
            <a
              href="https://www.twitter.com/jimmontour"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={40} className="header-icon" />
            </a>
          </div>
          <button
            href="#projects"
            role="button"
            aria-label="Learn more about me"
            className="hero-button"
          >
            See Projects
          </button>
        </div>
      </div>
    </HeroStyles>
  );
}
