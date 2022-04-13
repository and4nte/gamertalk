import Link from 'next/link';
import { Header } from './styled/AppHeader.style';

const AppHeader = () => {
  return (
    <Header>
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
    </Header>
  );
};

export default AppHeader;
