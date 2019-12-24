import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

/**
 * Styled Components
 */
const FooterStyle = styled.footer`
  background: ${props => props.theme.footerBg};
  grid-column: 1 / -1;
  height: 180px;
  color: #fff;
  margin-top: 1em;
  display: grid;
  grid-template-columns: ${props => props.theme.mainLayout};
  section {
    grid-column: 2 / -2;
    justify-self: center;
    align-self: center;
  }
  a {
    color: #fff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

/**
 * Component
 */
const Footer = () => {
  return (
    <FooterStyle>
      <section>
        <span>Let's get connected</span>
        <SocialIcons>
          <a
            href="https://twitter.com/_esausilva"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://github.com/esausilva"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/esausilva/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://esausilva.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Personal Blog"
          >
            <FontAwesomeIcon icon={faBlog} />
          </a>
        </SocialIcons>
      </section>
    </FooterStyle>
  );
};

export default Footer;
