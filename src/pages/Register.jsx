import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';
import { Container } from '@mui/material';

export default function Register() {
  return (
    <Container component="main" maxWidth="sm" sx={{ pt: 12 }}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Container>
  );
}
