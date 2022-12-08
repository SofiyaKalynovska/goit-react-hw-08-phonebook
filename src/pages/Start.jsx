import { Container, Typography } from '@mui/material';

export default function Start() {
  return (
    <Container sx={{ padding: "50px" }}>
      <Typography component="h2" variant="h3" align="center">
        Welcome to the Phonebook! To start managing contacts, please log in or
        register.
      </Typography>
    </Container>
  );
}
