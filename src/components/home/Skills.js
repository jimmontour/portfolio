import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  FaRegWindowMaximize,
  FaServer,
  FaDatabase,
  FaCloud,
} from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const SkillsStyle = styled.section`
  background-color: #00ebc7;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%230064ff' stroke-width='1' stroke-opacity='0.03'%3E%3Crect x='-40' y='40' width='75' height='75'/%3E%3Crect x='-35' y='45' width='65' height='65'/%3E%3Crect x='-30' y='50' width='55' height='55'/%3E%3Crect x='-25' y='55' width='45' height='45'/%3E%3Crect x='-20' y='60' width='35' height='35'/%3E%3Crect x='-15' y='65' width='25' height='25'/%3E%3Crect x='-10' y='70' width='15' height='15'/%3E%3Crect x='-5' y='75' width='5' height='5'/%3E%3Crect width='35' height='35'/%3E%3Crect x='5' y='5' width='25' height='25'/%3E%3Crect x='10' y='10' width='15' height='15'/%3E%3Crect x='15' y='15' width='5' height='5'/%3E%3Crect x='40' width='75' height='75'/%3E%3Crect x='45' y='5' width='65' height='65'/%3E%3Crect x='50' y='10' width='55' height='55'/%3E%3Crect x='55' y='15' width='45' height='45'/%3E%3Crect x='60' y='20' width='35' height='35'/%3E%3Crect x='65' y='25' width='25' height='25'/%3E%3Crect x='70' y='30' width='15' height='15'/%3E%3Crect x='75' y='35' width='5' height='5'/%3E%3Crect x='40' y='80' width='35' height='35'/%3E%3Crect x='45' y='85' width='25' height='25'/%3E%3Crect x='50' y='90' width='15' height='15'/%3E%3Crect x='55' y='95' width='5' height='5'/%3E%3Crect x='120' y='-40' width='75' height='75'/%3E%3Crect x='125' y='-35' width='65' height='65'/%3E%3Crect x='130' y='-30' width='55' height='55'/%3E%3Crect x='135' y='-25' width='45' height='45'/%3E%3Crect x='140' y='-20' width='35' height='35'/%3E%3Crect x='145' y='-15' width='25' height='25'/%3E%3Crect x='150' y='-10' width='15' height='15'/%3E%3Crect x='155' y='-5' width='5' height='5'/%3E%3Crect x='120' y='40' width='35' height='35'/%3E%3Crect x='125' y='45' width='25' height='25'/%3E%3Crect x='130' y='50' width='15' height='15'/%3E%3Crect x='135' y='55' width='5' height='5'/%3E%3Crect y='120' width='75' height='75'/%3E%3Crect x='5' y='125' width='65' height='65'/%3E%3Crect x='10' y='130' width='55' height='55'/%3E%3Crect x='15' y='135' width='45' height='45'/%3E%3Crect x='20' y='140' width='35' height='35'/%3E%3Crect x='25' y='145' width='25' height='25'/%3E%3Crect x='30' y='150' width='15' height='15'/%3E%3Crect x='35' y='155' width='5' height='5'/%3E%3Crect x='200' y='120' width='75' height='75'/%3E%3Crect x='40' y='200' width='75' height='75'/%3E%3Crect x='80' y='80' width='75' height='75'/%3E%3Crect x='85' y='85' width='65' height='65'/%3E%3Crect x='90' y='90' width='55' height='55'/%3E%3Crect x='95' y='95' width='45' height='45'/%3E%3Crect x='100' y='100' width='35' height='35'/%3E%3Crect x='105' y='105' width='25' height='25'/%3E%3Crect x='110' y='110' width='15' height='15'/%3E%3Crect x='115' y='115' width='5' height='5'/%3E%3Crect x='80' y='160' width='35' height='35'/%3E%3Crect x='85' y='165' width='25' height='25'/%3E%3Crect x='90' y='170' width='15' height='15'/%3E%3Crect x='95' y='175' width='5' height='5'/%3E%3Crect x='120' y='160' width='75' height='75'/%3E%3Crect x='125' y='165' width='65' height='65'/%3E%3Crect x='130' y='170' width='55' height='55'/%3E%3Crect x='135' y='175' width='45' height='45'/%3E%3Crect x='140' y='180' width='35' height='35'/%3E%3Crect x='145' y='185' width='25' height='25'/%3E%3Crect x='150' y='190' width='15' height='15'/%3E%3Crect x='155' y='195' width='5' height='5'/%3E%3Crect x='160' y='40' width='75' height='75'/%3E%3Crect x='165' y='45' width='65' height='65'/%3E%3Crect x='170' y='50' width='55' height='55'/%3E%3Crect x='175' y='55' width='45' height='45'/%3E%3Crect x='180' y='60' width='35' height='35'/%3E%3Crect x='185' y='65' width='25' height='25'/%3E%3Crect x='190' y='70' width='15' height='15'/%3E%3Crect x='195' y='75' width='5' height='5'/%3E%3Crect x='160' y='120' width='35' height='35'/%3E%3Crect x='165' y='125' width='25' height='25'/%3E%3Crect x='170' y='130' width='15' height='15'/%3E%3Crect x='175' y='135' width='5' height='5'/%3E%3Crect x='200' y='200' width='35' height='35'/%3E%3Crect x='200' width='35' height='35'/%3E%3Crect y='200' width='35' height='35'/%3E%3C/g%3E%3C/svg%3E");
  ul {
    margin: 0;
    padding: 0;
  }
  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
     @media (max-width: 960px) {
         grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 550px) {
         display: block;
      }
  }
  .card {
    background: var(--white);
    box-shadow: var(--level-3);
    border-radius: var(--borderRadius);
    padding: 3rem 1rem 2rem 1rem;
    transition: transform 0.2s ease-in;
    :hover {
      transform: translateY(-15px);
    }
   @media (max-width: 550px) {
      margin: 3rem auto 2rem auto;
      width: 75%;
   }
  }
  .icon {
    font-size: 5rem;
    color: var(--blue);
  }
`;

export default function Skills() {
   useEffect(() => {
      AOS.init();
   }, []);

  return (
    <SkillsStyle>
      <div className="container" id="skills">
        <div>
          <h2 className="text-center heading-margin">Tech Stack</h2>
        </div>
        <div
          className="cards-container"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="card">
            <div className="card-title text-center">
              <FaRegWindowMaximize className="icon" />
              <h4>Front End</h4>
            </div>
            <div className="card-info text-center">
              <ul>
                <li>HTML5</li>
                <li>CSS3 | SASS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-title text-center">
              <FaServer className="icon" />
              <h4>Server</h4>
            </div>
            <div className="card-info text-center">
              <ul>
                <li>NodeJS</li>
                <li>Express</li>
                <li>NestJS</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-title text-center">
              <FaDatabase className="icon" />
              <h4>Database</h4>
            </div>
            <div className="card-info text-center">
              <ul>
                <li>MongoDB</li>
                <li>GraphQL</li>
                <li>PostgreSQL</li>
                <li>MySql</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-title text-center">
              <FaCloud className="icon" />
              <h4>Other Skills</h4>
            </div>
            <div className="card-info text-center">
              <ul>
                <li>Git / GitHub</li>
                <li>Adobe XD</li>
                <li>Webpack</li>
                <li>Atomic Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SkillsStyle>
  );
}
