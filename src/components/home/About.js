import React, { useEffect } from 'react';
import styled from 'styled-components';
import Headshot from '../../images/headshot.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  const AboutStyle = styled.div`
  background: var(--lightGrey);
  h2 {
      @media (max-width: 960px) {
         text-align: center;
      }
  }
    img {
      width: 80%;
      border-radius: 50%;
      box-shadow: var(--level-3);
      @media (max-width: 960px) {
         border-radius: 3%;
         width: 100%;
      }
    }
    .about-container {
      max-width: 70%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      @media (max-width: 960px) {
         display: block;
      }
    }
    .button-container {
       margin-top: 3rem;
       @media (max-width: 960px) {
            display: flex;
         flex-direction: column;
         text-align: center;
       }
    }
  `;

  useEffect(() => {
     AOS.init();
  }, []);

  return (
    <AboutStyle>
      <div className="container about-container " id="about">
        <div>
          <img
            src={Headshot}
            alt="profilepicture"
            data-aos="fade-right"
            data-aos-once="true"
          />
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
            When I'm not busy working on various projects, you'll find me
            travelling, going on motorcycle trips, or watching bad 80s horror
            movies.
          </p>
          <p>
            <div className="button-container">
              <a
                href="https://docs.google.com/document/d/1z8u5R2woyu7K0Xt4ik90SgSxzsFvjDw3qD6clFu-KWA/edit?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Resume"
                data-aos="fade-up"
                data-aos-once="true"
                className="button"
              >
                Resume
              </a>
            </div>
          </p>
        </div>
      </div>
    </AboutStyle>
  );
}
