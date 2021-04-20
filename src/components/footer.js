import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

export default function Footer() {
  const FooterStyle = styled.footer`
    footer {
      color: var(--blue);
      text-align: center;
      padding: 2rem 0 6rem;
    }
  `;

  return (
    <FooterStyle>
      <footer>
        <div>
          <small>
            This site was created with React and hosted with Netlify. ©{new Date().getFullYear()}. ✌️ ❤️ 🤘
          </small>
        </div>
      </footer>
    </FooterStyle>
  );
}
