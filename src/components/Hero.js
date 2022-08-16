import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
  background: ${({ theme }) => theme.primaryBg};
  color: #fff;
  display: flex;
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
    color: ${({ theme }) => theme.fontHeading};
    font-size: 2.8rem;
  }
  div {
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.phone}) {
    h1 {
      font-size: 2.9rem;
    }
    h2 {
      font-size: 2.2rem;
    }
  }
`;

const Avatar = styled(GatsbyImage)`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.fontHeading};
  margin-bottom: 20px;
  align-self: center;
  @media (max-width: ${({ theme }) => theme.phone}) {
    width: 130px !important;
    height: 130px !important;
  }
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
          gatsbyImageData(layout: CONSTRAINED, width: 166, height: 166)
        }
      }
      more: file(relativePath: { eq: "icon-circle-down-arrow.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 31, height: 31)
        }
      }
    }
  `);
  const avatarImage = getImage(images.avatar);
  const moreArrowImage = getImage(images.more);

  return (
    <Header>
      <HeroContent>
        <Avatar image={avatarImage} alt="Esau Silva Photo" />
        <Typing speed={40}>
          <h1>Hello there! I’m Esau Silva</h1>
          <h2>Full-Stack Software Engineer</h2>
        </Typing>
        <More>
          <Link to="navigation" spy={true} smooth={true} duration={600}>
            <GatsbyImage image={moreArrowImage} alt="See More" />
          </Link>
        </More>
      </HeroContent>
    </Header>
  );
};

export { Hero };
