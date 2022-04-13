import styled from 'styled-components';
import { devices } from './AppLayout.style';

export const Header = styled.header`
  display: flex;

  background-color: black;

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }

  /* @media ${devices.mobile} {
    justify-content: flex-end;
  } */
`;
