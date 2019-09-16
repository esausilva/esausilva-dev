import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import posed from 'react-pose';
import Typing from 'react-typing-animation';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'react-scroll';

/**
 * Animations
 */
const moreAnimation = posed.div({
  hoverable: true,
  pressable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 },
  press: { scale: 1.1 },
});

/**
 * Styled Components
 */
const Header = styled.header`
  height: 100vh;
  position: relative;
  background: ${props => props.theme.primaryBg};
  color: #fff;
  display: grid;
  justify-content: center;
`;

const HeroContent = styled.section`
  align-self: center;
  display: grid;
  justify-items: center;
  h1,
  h2 {
    margin: 0;
    line-height: 1.4;
  }
  h1 {
    font-size: 3.6rem;
  }
  h2 {
    color: ${props => props.theme.fontHeading};
    font-size: 2.8rem;
  }
  div {
    text-align: center;
  }
`;

const Avatar = styled(Img)`
  border-radius: 50%;
  border: 2px solid ${props => props.theme.fontHeading};
  margin-bottom: 20px;
`;

const More = styled(moreAnimation)`
  margin-top: 40px;
  cursor: pointer;
  img {
    margin: 0;
  }
`;

/**
 * Component
 */
const Hero = () => {
  const images = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "esausilva-small.jpg" }) {
        childImageSharp {
          fixed(width: 166, height: 166) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      more: file(relativePath: { eq: "icon-circle-down-arrow.png" }) {
        childImageSharp {
          resize(width: 31, height: 31) {
            src
          }
        }
      }
    }
  `);

  return (
    <Header>
      <HeroContent>
        <Avatar fixed={images.avatar.childImageSharp.fixed} />
        <Typing speed={40}>
          <h1>Hello there! I’m Esau Silva</h1>
          <h2>
            Full-Stack Software Engineer <br />
            Brazilian Jiu-Jitsu Practitioner
          </h2>
        </Typing>
        <More>
          <Link to="main-content" spy={true} smooth={true} duration={500}>
            <img src={images.more.childImageSharp.resize.src} />
          </Link>
        </More>
      </HeroContent>
    </Header>
  );
};

export default Hero;
