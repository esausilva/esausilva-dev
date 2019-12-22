import React, { useState } from 'react';
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
`;

const NameButton = styled.button`
  border: 2px solid ${props => props.theme.accent};
  color: ${props => props.theme.accent};
  padding: 3px;
  font-size: 1.8rem;
  background: transparent;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  @media (max-width: ${props => props.theme.phone}) {
    position: fixed;
    background: ${props => props.theme.primaryBg};
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 100%;
    transform: translateX(0);
    transition: transform 250ms;
  }
`;

const Hamburger = styled.button`
  border: 0;
  background: 0;
  color: #fff;
  cursor: pointer;
  padding: 0.5em;
  margin-left: auto;
  font-size: 1.5em;
  display: none;
  @media (max-width: ${props => props.theme.phone}) {
    display: inline-block;
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
    &:after {
      display: block;
      content: '';
      border-bottom: solid 2px ${props => props.theme.accent};
      transform: scaleX(0);
      transition: transform 150ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(1);
    }
    a {
      color: #fff;
    }
  }
  @media (max-width: ${props => props.theme.phone}) {
    height: 100%;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    li {
      font-size: 3rem;
    }
  }
`;

const CloseMenu = styled.button`
  border: 0;
  background: 0;
  color: #ffe600;
  font-weight: 700;
  font-size: 3rem;
  cursor: pointer;
  padding: 0.5em;
  position: absolute;
  display: none;
  @media (max-width: ${props => props.theme.phone}) {
    display: inline-block;
  }
`;

const menuOpenStyle = {
  transform: 'translateX(-100%)',
};

/**
 * Component
 */
const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <Nav id="navigation">
      <NameButton onClick={scrollToTop}>
        Esau <br />
        Silva
      </NameButton>
      <Hamburger className="open-nav" onClick={toggleMenu}>
        &#9776;
      </Hamburger>
      <MenuWrapper style={isOpenMenu ? menuOpenStyle : null}>
        <CloseMenu onClick={toggleMenu}>&times;</CloseMenu>
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
      </MenuWrapper>
    </Nav>
  );
};

export default Navigation;
