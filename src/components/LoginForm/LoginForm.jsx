import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authOperations';
import { LoginTwoTone } from '@mui/icons-material';
import {
  Avatar,
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { Form } from 'components/ContactForm/ContactForm.styled';

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
    <Container maxWidth="xl">
      <Box
        sx={{
          backgroundColor: '#e8ebff',
          marginTop: '30px',
          border: '3px solid #1976d2',
          padding: 2,
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar alt="Register icon" sx={{ m: 1 }}>
          <LoginTwoTone />
        </Avatar>
        <Typography
          component="h1"
          variant="h4"
          color="#1976d2"
          sx={{ fontSize: { xs: 26, sm: 28, md: 32, xl: 36 } }}
        >
          Log in
        </Typography>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Typography
            variant="body"
            component="label"
            color="#1976d2"
            sx={{ fontSize: { xs: 20, sm: 22, md: 24, xl: 26 } }}
          >
            Email
          </Typography>
          <TextField
            label="Provide password"
            variant="outlined"
            type="email"
            name="email"
            required
            inputProps={{ style: { fontSize: 24 } }}
          />
          <Typography
            variant="body"
            component="label"
            color="#1976d2"
            sx={{ fontSize: { xs: 20, sm: 22, md: 24, xl: 26 } }}
          >
            Password
          </Typography>
          <TextField
            label="Provide password"
            variant="outlined"
            type="password"
            name="password"
            required
            inputProps={{ style: { fontSize: 24 } }}
          />
          <Button variant="contained" size="large" color="info" type="submit">
            Log in
          </Button>
        </Form>
      </Box>
    </Container>
  );
};
