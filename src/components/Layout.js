/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import { Hero } from './Hero';
import { Navigation } from './Navigation';
import { Footer } from '../components/Footer';

/**
 * Styled Components
 */
const Main = styled.main`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.layouts.main};
  & > * {
    grid-column: 2 / -2;
  }
  h1 {
    color: ${({ theme }) => theme.colors.sand};
    text-transform: lowercase;
    margin: 0;
    font-weight: 300;
    font-size: 3.8rem;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    h1 {
      font-size: 4.8rem;
    }
  }
`;

/**
 * Component
 */
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Hero />
        <Navigation />
        <Main>{children}</Main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
