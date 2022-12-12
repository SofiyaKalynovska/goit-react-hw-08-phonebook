import { LoginForm } from '../components/LoginForm';
import { Helmet } from 'react-helmet';
import { Container } from '@mui/material';

export default function Login() {
  return (
    <Container component="main" maxWidth="sm" sx={{ pt: 12 }}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
}
