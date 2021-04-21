import React from "react";
import styled from "styled-components";

export default function Footer() {
  const FooterStyle = styled.footer`
    footer {
      color: var(--blue);
      text-align: center;
      padding: 2rem 0 6rem;
      @media (max-width: 600px) {
        width: 50%;
        margin: 0 auto;
      }
    }
  `;

  return (
    <FooterStyle>
      <footer>
        <div>
          <small>
            This site was created with React and hosted with Netlify. ©
            {new Date().getFullYear()}. ✌️ ❤️ 🤘
          </small>
        </div>
      </footer>
    </FooterStyle>
  );
}
