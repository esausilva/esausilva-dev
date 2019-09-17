import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

/**
 * Styled Components
 */
const Nav = styled.nav`
  /* border-top: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  background: ${props => props.theme.primaryBg};
  height: 90px;
  padding: 30px;
  button {
    border: 2px solid ${props => props.theme.accent};
    color: ${props => props.theme.accent};
    padding: 3px;
    font-size: 1.8rem;
    background: transparent;
    cursor: pointer;
  }
`;

const Menu = styled.ul`
  margin: 0;
  display: flex;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  li {
    list-style: none;
    margin: 0;
    margin-left: 15px;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid ${props => props.theme.accent};
    }
    a {
      color: #fff;
    }
  }
`;

/**
 * Component
 */
const Navigation = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav id="navigation">
      <button onClick={scrollToTop}>
        Esau <br />
        Silva
      </button>
      <Menu>
        <li>
          <Link to="nav-about" spy={true} smooth={true} duration={600}>
            about
          </Link>
        </li>
        <li>
          <Link to="nav-portfolio" spy={true} smooth={true} duration={600}>
            portfolio
          </Link>
        </li>
        <li>
          <Link to="nav-wip" spy={true} smooth={true} duration={600}>
            wip
          </Link>
        </li>
        <li>
          <Link to="nav-oss" spy={true} smooth={true} duration={600}>
            open source
          </Link>
        </li>
        <li>
          <Link to="nav-blog" spy={true} smooth={true} duration={600}>
            blog
          </Link>
        </li>
        <li>
          <Link to="nav-experience" spy={true} smooth={true} duration={600}>
            experience
          </Link>
        </li>
      </Menu>
    </Nav>
  );
};

export default Navigation;
