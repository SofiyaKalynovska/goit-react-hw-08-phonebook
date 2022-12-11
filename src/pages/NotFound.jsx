import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


export default function NotFound() {
  const { isLoggedIn } = useAuth();
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: {xs: 15, sm: 25},
        backgroundColor: '#e3e7ff',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" style={{ color: '#1976d2' }}>
        404
      </Typography>
      <Typography variant="h5" style={{ color: '#1976d2' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button sx={{ mt: 4}} variant="contained" to="/contacts" component={NavLink}>{isLoggedIn ? 'Back to contacts' : 'Back to Log in page' }</Button>
    </Box>
  );
}
