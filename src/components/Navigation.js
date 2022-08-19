import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

/**
 * Styled Components
 */
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  background: ${({ theme }) => theme.colors.navyBlue};
  height: 60px;
  padding: 30px;
  z-index: 3;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    height: 90px;
  }
`;

const NameButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.blueish};
  color: ${({ theme }) => theme.colors.blueish};
  padding: 3px;
  font-size: 1.5rem;
  background: transparent;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: 1.8rem;
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.colors.navyBlue};
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 100%;
  transform: translateX(0);
  transition: transform 250ms;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    position: inherit;
    width: auto;
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
  display: inline-block;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    display: none;
  }
`;

const Menu = styled.ul`
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  li {
    list-style: none;
    margin: 0;
    margin-left: 15px;
    font-size: 3rem;
    &:after {
      display: block;
      content: '';
      border-bottom: solid 2px ${({ theme }) => theme.colors.blueish};
      transform: scaleX(0);
      transition: transform 150ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(1);
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    height: auto;
    flex-direction: row;
    li {
      font-size: inherit;
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
  display: inline-block;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    display: none;
  }
`;

const menuOpenStyle = {
  transform: 'translateX(-100%)',
};

/**
 * Helpers
 */
const menuItems = [
  {
    text: 'about',
    linkTo: 'nav-about',
  },
  {
    text: 'portfolio',
    linkTo: 'nav-portfolio',
  },
  // {
  //   text: 'wip',
  //   linkTo: 'nav-wip',
  // },
  {
    text: 'open source',
    linkTo: 'nav-oss',
  },
  {
    text: 'blog',
    linkTo: 'nav-blog',
  },
];

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
          {menuItems.map(({ text, linkTo }) => (
            <li key={text}>
              <Link
                to={linkTo}
                spy={true}
                smooth={true}
                duration={600}
                offset={-60}
                onClick={() => setIsOpenMenu(false)}
              >
                {text}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.linkedin.com/in/esausilva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              experience
            </a>
          </li>
        </Menu>
      </MenuWrapper>
    </Nav>
  );
};

export { Navigation };
