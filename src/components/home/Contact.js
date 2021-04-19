import React from 'react';
import styled from 'styled-components';

export default function Contact() {
  const ContactStyle = styled.div`
    background: var(--lightGrey);
    .contact-container {
      width: 80%;
      margin: 0 auto;
    }
    .contact-info {
      margin: 0 auto;
      text-align: center;
      div {
      }
    }
    .contact-button {
      margin-top: 2rem;
    }
  `;

  return (
    <ContactStyle>
      <div className="container">
        <div className="contact-container">
          <div>
            <h2 className="text-center heading-margin">Get In Touch</h2>
            <div className="contact-info">
              <div>
                I'm currently looking for Web Development opportunities! If you
                know of any positions available, <br />
                if you have any questions, or if you just want to say hi, send
                me an email!
              </div>
              <button
                href="mailto:jimmontour@gmail.com"
                role="button"
                aria-label="Contact"
                className="contact-button"
              >
                Say Hello
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
}
