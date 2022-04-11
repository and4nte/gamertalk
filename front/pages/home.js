import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';

const Home = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return <AppLayout>{isLoggedIn ? <div>로그인됨</div> : <LoginForm />}</AppLayout>;
};

export default Home;
