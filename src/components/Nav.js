import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Nav() {
  const NavStyle = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 4rem;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.3);
    nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      @media (max-width: 800px) {
        display: none;
      }
    }
    img {
      width: 20px;
    }
    ul {
      display: flex;
    }
    li {
      margin-left: 2rem;
    }
    h3 {
      font-size: 1.5rem;
      letter-spacing: 0.2rem;
      margin: 0;
      font-weight: 800;
    }
    h3 a {
      color: var(--blue);
      margin: 0;
    }
    ul a {
      text-decoration: none;
      color: var(--blue);
      position: relative;
      letter-spacing: 0.2rem;
    }
    ul a:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--blue);
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;
    }
    ul a:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
  `;

  useEffect(() => {
     AOS.init()
  }, []);

  return (
    <NavStyle data-aos="fade-down" data-aos-once="true" className="navigation">
      <nav>
        <div className="logo">
          <h3>
            <a href="/#hero">JIM MONTOUR</a>
          </h3>
        </div>
        <ul>
          <li>
            <a href="/#about">ABOUT</a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1z8u5R2woyu7K0Xt4ik90SgSxzsFvjDw3qD6clFu-KWA/edit?usp=sharing"
              rel="noreferrer"
            >
              RESUME
            </a>
          </li>
          <li>
            <a href="/#skills">SKILLS</a>
          </li>
          <li>
            <a href="/#projects">PROJECTS</a>
          </li>
          <li>
            <a href="/#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </NavStyle>
  );
}
