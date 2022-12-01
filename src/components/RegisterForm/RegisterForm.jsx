import { useDispatch } from 'react-redux';
import { register } from '../../redux/authOperations';
import { RegisterFormStyled, RegisterFormLabel, RegisterFormInput } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormStyled onSubmit={handleSubmit} autoComplete="off">
      <RegisterFormLabel>
        Username
        <RegisterFormInput type="text" name="name" />
      </RegisterFormLabel>
      <RegisterFormLabel >
        Email
        <RegisterFormInput type="email" name="email" />
      </RegisterFormLabel>
      <RegisterFormLabel >
        Password
        <RegisterFormInput type="password" name="password" />
      </RegisterFormLabel>
      <button type="submit">Register</button>
    </RegisterFormStyled>
  );
};
