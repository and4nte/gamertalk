import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li>
          <Link href="">
            <a>새글쓰기</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>홈</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>알림</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>설정</a>
          </Link>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav``;
