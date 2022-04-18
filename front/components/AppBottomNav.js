import Link from 'next/link';
import styled from 'styled-components';

import { HomeOutlined, SearchOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { devices } from './styled/common';

const AppBottomNav = () => {
  return (
    <BottomNavContainer>
      <BottomNavInnerContainer>
        <LinkWrap>
          <Link href="/home">
            <a>
              <HomeOutlined />
            </a>
          </Link>
        </LinkWrap>
        <LinkWrap>
          <Link href="/search">
            <a>
              <SearchOutlined />
            </a>
          </Link>
        </LinkWrap>
        <LinkWrap>
          <Link href="/notifications">
            <a>
              <BellOutlined />
            </a>
          </Link>
        </LinkWrap>
        <LinkWrap>
          <Link href="/settings">
            <a>
              <UserOutlined />
            </a>
          </Link>
        </LinkWrap>
      </BottomNavInnerContainer>
    </BottomNavContainer>
  );
};

export default AppBottomNav;

const BottomNavContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  display: flex;
  width: 100%;
  height: 49px;

  background-color: black;

  @media ${devices.mobile} {
    display: none;
  }
`;

const BottomNavInnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;

  border: 0 solid black;
  border-top-width: 1px;
  border-top-color: rgb(47, 51, 54);
`;

const LinkWrap = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;

  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    width: 100%;
    font-size: 1.5rem;
    user-select: none;
    cursor: pointer;
    color: rgb(231, 233, 234);
  }
`;
