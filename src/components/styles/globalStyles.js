import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    overflow-x: hidden;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    color: ${theme.fontMain};
    letter-spacing: 0.07rem;
    font-size: 2rem;
  }
  p,
  h1,
  h2 {
    margin-top: 0;
  }
  h1 {
    font-size: 4.8rem;
  }
  h2 {
    font-size: 2rem;
  }
  a {
    color: ${theme.fontMain};
    &:focus,
    &:hover {
      color: ${lighten(0.5, theme.fontMain)}
    }
  }
  @media (max-width: ${theme.phone}) {
    body {
      font-size: 1.8rem;
    }
    p, h2 {
      text-align: center;
    }
  }
`;
