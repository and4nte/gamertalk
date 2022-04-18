import styled from 'styled-components';
import Navbar from './Navbar';
import ProfileIcon from './ProfileIcon';

const AppHeader = () => {
  return (
    <Header>
      <ProfileIcon />
      <Navbar />
    </Header>
  );
};

export default AppHeader;

const Header = styled.header`
  display: flex;
  background-color: black;

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }
`;
