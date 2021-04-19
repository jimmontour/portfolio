import React from 'react';
import styled from 'styled-components';
import Temporary from '../../images/temporary.jpg';

export default function Project({
  title,
  description,
  repo,
  live,
  subtitle,
  tech,
}) {
  const ProjectStyle = styled.div`
    h3 {
      margin-top: 0;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
    margin-bottom: 6rem;
    img {
      width: 100%;
    }
    button {
      margin-right: 1rem;
    }
    span {
      font-weight: 600;
      background: var(--green);
      border-radius: 5px;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      margin: 0 1rem 0 0;
    }
    .tech-list {
      margin: 1rem 0 2rem 0;
    }
    .project-buttons {
      margin-top: 2rem;
    }
  `;

  return (
    <ProjectStyle>
      <div>
        <img src={Temporary} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        <hr />
        <p>{description}</p>
        <div>
          {tech.map((individualTech) => (
            <span>{individualTech}</span>
          ))}
        </div>
        <div className="project-buttons">
          <button>Visit Site</button>
          <button className="button-transparent">GitHub Repo</button>
        </div>
      </div>
    </ProjectStyle>
  );
}
