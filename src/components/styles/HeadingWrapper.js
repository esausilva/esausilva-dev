import styled from 'styled-components';

const HeadingWrapper = styled.div`
  background: ${({ theme }) => theme.colors.offWhite};
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: ${({ theme }) => theme.layouts.main};
  padding-top: 1.5em;
  margin-bottom: 1em;
  h1 {
    grid-column: 2 / -2;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    padding-top: 2.3em;
    margin-bottom: 1.5em;
  }
`;

export { HeadingWrapper };
