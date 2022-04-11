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

import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch({
      type: 'LOG_IN',
      data: true,
    });
  }, []);

  return (
    <Container dark>
      <form>
        <TextInput label="Email" value={email} onChange={onChangeEmail} required />
        <TextInput
          type="password"
          label="Password"
          value={password}
          onChange={onChangePassword}
          required
        />
        <Button primary type="button" onClick={onSubmitForm}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
