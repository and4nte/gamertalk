import styled from 'styled-components';
import Link from 'next/link';

const NavWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0;
  display: flex;
`;

const MenuWrapper = styled.div`
  padding: 0 10px;
`;

const AppNavBottom = () => {
  return (
    <NavWrapper>
      <MenuWrapper>
        <Link href="/home">
          <a>홈</a>
        </Link>
      </MenuWrapper>
      <MenuWrapper>
        <Link href="/search">
          <a>검색</a>
        </Link>
      </MenuWrapper>
      <MenuWrapper>
        <Link href="/notifications">
          <a>알림</a>
        </Link>
      </MenuWrapper>
      <MenuWrapper>
        <Link href="/settings">
          <a>설정</a>
        </Link>
      </MenuWrapper>
    </NavWrapper>
  );
};

export default AppNavBottom;
