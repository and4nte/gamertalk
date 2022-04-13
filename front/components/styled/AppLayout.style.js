import styled from 'styled-components';

const sizes = {
  mobile: '500px', // nav at bottom
  tablet: '1000px', // nav at left side
};

export const devices = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  background-color: red;

  @media ${devices.mobile} {
    flex-direction: row;
    justify-content: center;
    max-width: 800px;
    background-color: orange;
  }

  @media ${devices.tablet} {
    max-width: 1200px;
    background-color: yellow;
  }
`;

export const ttt = styled.div`
  display: flex;
`;
