import React from 'react';
import styled from 'styled-components';

import Project from './Project';

const projectList = [
  {
    title: 'Technobabble',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eligendi sed, adipisci esse est perferendis tempora. Commodi inventore sunt ab praesentium esse, in autem, nam perspiciatis perferendis deleniti doloremque tenetur.',
    subtitle: 'P2P Video and Chat Client',
    live: 'technobabble.dev',
    repo: 'github.com/jimmontour/technobabble',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    key: 1,
  },
  {
    title: 'Fit Feud',
    subtitle: 'Group Fitness Competition Tracker',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eligendi sed, adipisci esse est perferendis tempora. Commodi inventore sunt ab praesentium esse, in autem, nam perspiciatis perferendis deleniti doloremque tenetur.',
    live: 'technobabble.dev',
    repo: 'github.com/jimmontour/technobabble',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    key: 2,
  },
  {
    title: 'Dianagram',
    subtitle: 'Instagram Inspired Social Media App',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eligendi sed, adipisci esse est perferendis tempora. Commodi inventore sunt ab praesentium esse, in autem, nam perspiciatis perferendis deleniti doloremque tenetur.',
    live: 'technobabble.dev',
    repo: 'github.com/jimmontour/technobabble',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    key: 3,
  },
  {
    title: 'Brain Dump',
    subtitle: 'To-do List With A Focus Thought Categorization',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eligendi sed, adipisci esse est perferendis tempora. Commodi inventore sunt ab praesentium esse, in autem, nam perspiciatis perferendis deleniti doloremque tenetur.',
    live: 'technobabble.dev',
    repo: 'github.com/jimmontour/technobabble',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    key: 4,
  },
];

export default function Projects() {
  const ProjectsStyle = styled.div`
    .project-container {
      margin: 0 auto;
      width: 100%;
    }
  `;

  return (
    <ProjectsStyle>
      <div className=" container">
        <div>
          <h2 className="text-center heading-margin">Projects</h2>
          {projectList.map((project) => (
            <Project
              title={project.title}
              description={project.description}
              live={project.live}
              repo={project.repo}
              subtitle={project.subtitle}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </ProjectsStyle>
  );
}
