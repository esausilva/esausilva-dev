import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
`;

const Avatar = styled(Img)`
  border-radius: 50%;
  border: 2px solid ${props => props.theme.fontHeading};
  margin-bottom: 20px;
`;

const More = styled.img`
  margin-top: 40px;
`;

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
        <h1>Hello there! I’m Esau Silva</h1>
        <h2>
          Full-Stack Software Engineer <br />
          Brazilian Jiu-Jitsu practitioner
        </h2>
        <More src={images.more.childImageSharp.resize.src} />
      </HeroContent>
    </Header>
  );
};

export default Hero;
