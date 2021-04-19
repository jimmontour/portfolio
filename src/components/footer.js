import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

export default function Footer() {
  const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
  `;

  return (
    <FooterStyle>
      <footer>
        <a
          href="https://www.github.com/jimmontour"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jimmontour"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.twitter.com/jimmontour"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </footer>
      <div>
        <small>© {new Date().getFullYear()}, Jim Montour</small>
      </div>
      <div>
        <small>something else</small>
      </div>
    </FooterStyle>
  );
}
