import React from 'react';
import styled from 'styled-components';
import {
  FaRegWindowMaximize,
  FaServer,
  FaDatabase,
  FaCloud,
} from 'react-icons/fa';

const SkillsStyle = styled.section`
  background: var(--lightGrey);
  ul {
    margin: 0;
    padding: 0;
  }
  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
  }
  .card {
    background: var(--white);
    box-shadow: var(--level-3);
    border-radius: var(--borderRadius);
    padding: 3rem 1rem 2rem 1rem;
  }
  .card-top {
  }
  .card-info {
  }
  .icon {
    font-size: 5rem;
    color: var(--blue);
  }
`;

export default function Skills() {
  return (
    <SkillsStyle>
      <div className="container">
        <div>
          <h2 className="text-center heading-margin">Tech Stack</h2>
        </div>
        <div className="cards-container">
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
