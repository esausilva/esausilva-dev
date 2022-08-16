import styled from 'styled-components';

const HeadingWrapper = styled.div`
  background: ${({ theme }) => theme.headingBg};
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.mainLayout};
  padding-top: 2.3em;
  margin-bottom: 1.5em;
  h1 {
    grid-column: 2 / -2;
  }
  @media (max-width: ${({ theme }) => theme.phone}) {
    padding-top: 1.5em;
    margin-bottom: 1em;
  }
`;

export { HeadingWrapper };
