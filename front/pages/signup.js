import { useState, useCallback } from 'react';
import {
  Container,
  Button,
  Radios,
  Checkbox,
  TextInput,
  TextArea,
  Avatar,
  Balloon,
  Icon,
  Sprite,
} from 'nes-react';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const Signup = () => {
  const [username, onChangeUsername] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [PasswordCheck, onChangePasswordCheck] = useInput('');
  const [email, setEmail] = useState('');
  const [acceptance, setAcceptance] = useState(false);

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const onChangeAcceptance = useCallback(e => {
    setAcceptance(e.target.checked);
  }, []);

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      console.log({ username, password, PasswordCheck, email, acceptance });
    },
    [username, password, PasswordCheck, email, acceptance],
  );

  return (
    <AppLayout>
      <Container>
        <form onSubmit={onSubmitForm}>
          <TextInput
            type="email"
            label="Email"
            placeholder="Email here.."
            value={email}
            onChange={onChangeEmail}
            required
          />
          <TextInput
            label="Username"
            placeholder="Username here.."
            value={username}
            onChange={onChangeUsername}
            required
          />
          <TextInput
            type="password"
            label="Password"
            placeholder="Password here.."
            value={password}
            onChange={onChangePassword}
            required
          />
          <TextInput
            type="password"
            label="Confirm Password"
            placeholder="Password Matching.."
            value={PasswordCheck}
            onChange={onChangePasswordCheck}
            required
          />
          <Checkbox
            onChange={onChangeAcceptance}
            checked={acceptance}
            label="I accept the Terms of Use & Privacy Policy"
          />
          <Button primary type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </AppLayout>
  );
};

export default Signup;
