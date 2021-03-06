import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";
import Devland from "../../images/devland-sample.png";
import Travelog from "../../images/travelog-sample.png";
import Technobabble from "../../images/technobabble-sample.png";

export default function Projects() {
  const ProjectsStyle = styled.div`
   background: var(--lightGrey);
    .project-container {
      margin: 0 auto;
      width: 100%;
    }
  `;
   const ProjectStyle = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 2rem;
     align-items: start;
     margin-bottom: 8rem;
     @media (max-width: 960px) {
       display: block;
     }
     img {
       width: 100%;
     }
     h3 {
       margin-top: 0;
     }
     a {
       margin-right: 1rem;
     }
     span {
       font-weight: 400;
       background: var(--green);
       border-radius: 5px;
       font-size: 0.8rem;
       text-align: center;
       padding: 0.5rem 0.75rem;
     }
     .tech-list {
       display: grid;
       grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
       grid-template-rows: 1fr 1fr;
       gap: 0.5rem;
       @media (max-width: 960px) {
         display: grid;
       }
       @media (max-width: 500px) {
         grid-template-columns: 1fr 1fr 1fr;
       }
     }
     .project-buttons {
       margin-top: 4rem;
       @media (max-width: 960px) {
         display: grid;
         grid-template-columns: 1fr 1fr;
       }
       @media (max-width: 500px) {
         grid-template-columns: 1fr;
         gap: 1rem;
         margin-top: 2rem;
       }
     }
     .card-right,
     .card-left {
       box-shadow: var(--level-3);
       padding: 3rem;
     }

     .project-screenshot {
       img {
         width: 100%;
         height: auto;
       }
     }
   `;

    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <ProjectsStyle>
      <div className="container" id="projects">
        <div>
          <h2 className="text-center heading-margin">Projects</h2>
          {/* Projects start here */}
          <ProjectStyle class="project">
            <div className="project-screenshot">
              <img
                src={Travelog}
                alt="project snapshot"
                data-aos="fade-right"
                data-aos-once="true"
              />
            </div>
            <div className="card-right">
              <h3>Travelog</h3>
              <h5>Social Media Photo Sharing App</h5>
              <hr />
              <p>
                Instagram-inspired picture app with feed, shares, likes, and
                photo upload features. All posts can be updated and deleted.
                Future implementations will include authentication and user
                accounts.
              </p>
              <div className="tech-list">
                <span>React</span>
                <span>NodeJS</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Material UI</span>
              </div>
              <div
                className="project-buttons"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <a
                  href="https://travel-log.dev/"
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                >
                 Demo
                </a>
                <a
                  href="https://github.com/jimmontour/travelog"
                  className="button button-transparent"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </ProjectStyle>
          <ProjectStyle class="project">
            <div>
              <img
                src={Devland}
                alt="project snapshot"
                data-aos="fade-right"
                data-aos-once="true"
              />
            </div>
            <div className="card-left">
              <h3>DevLand</h3>
              <h5>Junior Developer Job Board</h5>
              <hr />
              <p>
                Fetches and delivers a list of Junior Developer jobs every hour
                using a cron job and GitHub jobs API. The list is filtered down
                to Junior Level positions and put into a table with a simple and
                clean UI.
              </p>
              <div className="tech-list">
                <span>React</span>
                <span>NodeJS</span>
                <span>Express</span>
                <span>Redis</span>
                <span>Cron</span>
              </div>
              <div
                className="project-buttons"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <a
                  href="https://devland.dev/"
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/jimmontour/devland"
                  className="button button-transparent"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </ProjectStyle>
          <ProjectStyle class="project">
            <div>
              <img
                src={Technobabble}
                alt="project snapshot"
                data-aos="fade-right"
                data-aos-once="true"
              />
            </div>
            <div className="card-right">
              <h3>TechnoBabble</h3>
              <h5>P2P Video Chat Client</h5>
              <hr />
              <p>
                Inspired by Zoom, this is an ultra-simple to use P2P video chat
                client with an 80s synthpunk UI. To connect with a friend,
                simply share your room address and you're ready to chat!
              </p>
              <div className="tech-list">
                <span>JavaScript</span>
                <span>Node</span>
                <span>Express</span>
                <span>PeerJS</span>
                <span>EJS</span>
              </div>
              <div
                className="project-buttons"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <a
                  href="https://enigmatic-sierra-46529.herokuapp.com/6a55ee8f-8397-4e8a-9fa7-24df81b40d66?fbclid=IwAR3kTAIioGzOv8-t3fes-oRSza2Df6Gbsu0HWjklyyFZYMEJXMaCDzXG9rw"
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/jimmontour/technobabble"
                  className="button button-transparent"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </ProjectStyle>
          {/* Projects end here */}
        </div>
      </div>
    </ProjectsStyle>
  );
}
