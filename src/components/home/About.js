import React from 'react';
import styled from 'styled-components';
import Headshot from '../../images/headshot.jpg';

export default function About() {
  const AboutStyle = styled.div`
    img {
      width: 80%;
      border-radius: 50%;
      box-shadow: var(--level-3);
    }
    .about-container {
      max-width: 70%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
    }
  `;

  return (
    <AboutStyle>
      <div className="container about-container ">
        <div>
          <img src={Headshot} alt="profilepicture" />
        </div>
        <div>
          <h2>About Me</h2>
          <p>
            Hey there, I'm Jim! I love building new exciting things for the Web.
            My interest in web development started back when I was a kid trying
            to hack together websites for my friends' bands. After a successful
            career in Government and Communications, I decided to chase after my
            true passion for development, and never looked back!
          </p>
          <p>
            Fast-forward to today, I am a Full Stack Developer with a focus on
            the MERN stack. As a self-taught programmer, I use continuous
            iteration to produce results quickly and continuously improve.
          </p>
          <p>
            When I'm not busy working on various projects, you'll find me going
            on motorcycle trips or watching bad 80s horror movies.
          </p>
          <p>
            <button
              href="https://docs.google.com/document/d/1z8u5R2woyu7K0Xt4ik90SgSxzsFvjDw3qD6clFu-KWA/edit?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              role="button"
              aria-label="Resume"
            >
              Resume
            </button>
          </p>
        </div>
      </div>
    </AboutStyle>
  );
}
