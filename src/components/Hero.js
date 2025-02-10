import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'react-scroll';

/**
 * Styled Components
 */
const Header = styled.header`
  height: 100vh;
  position: relative;
  background: ${({ theme }) => theme.colors.navyBlue};
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
    text-align: center;
  }
  h1 {
    font-size: 2.9rem;
  }
  h2 {
    color: ${({ theme }) => theme.colors.sand};
    font-size: 2.2rem;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    h1 {
      font-size: 3.6rem;
    }
    h2 {
      font-size: 2.8rem;
    }
  }
`;

const Avatar = styled(GatsbyImage)`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.sand};
  margin-bottom: 20px;
  align-self: center;
  width: 130px;
  height: 130px;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: initial;
    height: initial;
  }
`;

const More = styled.div`
  margin-top: 40px;
  cursor: pointer;
  img {
    margin: 0;
  }
  :hover {
    background: ${({ theme }) => theme.colors.sand};
    border-radius: 50%;
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
  const titleRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(titleRef.current, {
      strings: [
        '<h1>Hello there! I’m Esau Silva</h1> ^1000\n <h2>Full-Stack Software Engineer</h2>',
      ],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Header>
      <HeroContent>
        <Avatar image={avatarImage} alt="Esau Silva Photo" />
        <div ref={titleRef}></div>
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
