import styled from 'styled-components';

const HeadingWrapper = styled.div`
  background: ${props => props.theme.headingBg};
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: ${props => props.theme.mainLayout};
  padding-top: 2.3em;
  margin-bottom: 1.5em;
  h1 {
    grid-column: 2 / -2;
  }
  @media (max-width: ${props => props.theme.phone}) {
    padding-top: 1.5em;
    margin-bottom: 1em;
  }
`;

export { HeadingWrapper };
