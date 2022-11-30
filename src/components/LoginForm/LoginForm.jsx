import { useDispatch } from 'react-redux';
import {logIn} from "../../redux/authOperations"
import {
  LoginFormStyled,
  LoginFormLabel,
  LoginFormInput,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
      <LoginFormLabel >
        Email
        <LoginFormInput type="email" name="email" />
      </LoginFormLabel>
      <LoginFormLabel>
        Password
        <LoginFormInput type="password" name="password" />
      </LoginFormLabel>
      <button type="submit">Log In</button>
    </LoginFormStyled>
  );
};
