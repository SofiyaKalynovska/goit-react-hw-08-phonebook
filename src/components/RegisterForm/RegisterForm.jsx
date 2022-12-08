import { useDispatch } from 'react-redux';
import { register } from '../../redux/authOperations';
// import { RegisterFormStyled, RegisterFormLabel, RegisterFormInput } from './RegisterForm.styled';
import { PersonAddAlt1TwoTone } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { Form } from 'components/ContactForm/ContactForm.styled';

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
    <Container maxWidth="xs">
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
          <PersonAddAlt1TwoTone />
        </Avatar>
        <Typography component="h1" variant="h4" color="#1976d2">
          Sign in
        </Typography>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Typography variant="body" component="label" color="#1976d2">
            Username
          </Typography>
          <TextField
            fullWidth="true"
            label="Provide name"
            variant="outlined"
            type="text"
            fontSize="40"
            name="name"
            required
            inputProps={{ style: { fontSize: 24 } }}
          />
          <Typography variant="body" component="label" color="#1976d2">
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
          <Typography variant="body" component="label" color="#1976d2">
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
            Register
          </Button>
        </Form>
      </Box>
    </Container>
  );
};
