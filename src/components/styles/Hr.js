import styled from 'styled-components';

export const Hr = styled.hr`
  border: 0;
  border-top: 0.005rem solid ${props => props.theme.border};
  width: 85%;
  margin: 1em auto;
  &:last-child {
    display: none;
  }
`;
