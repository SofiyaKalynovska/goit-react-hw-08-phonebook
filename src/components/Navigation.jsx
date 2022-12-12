import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Box, Button, Typography } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box>
      {isLoggedIn ? (
        <Button
          size="small"
          variant="contained"
          sx={{
            fontWeight: 'bold',
            border: '1px solid white',
            backgroundColor: '#f7e9c4',
            borderRadius: 1,
            padding: '5px',
            ':focus-within': { backgroundColor: '#cbba83' },
          }}
        >
          <NavLink style={{ textDecoration: 'none' }} to="/contacts">
            <Typography
              sx={{
                color: '#1976d2',
                ':hover': { color: 'red' },
                fontWeight: 'bold',
              }}
            >
              Contacts
            </Typography>
          </NavLink>
        </Button>
      ) : (
        <Button
          size="small"
          variant="contained"
          sx={{
            fontWeight: 'bold',
            border: '1px solid white',
            backgroundColor: '#f7e9c4',
            borderRadius: 1,
            padding: '5px',
            ':focus-within': { backgroundColor: '#cbba83' },
          }}
        >
          <NavLink style={{ textDecoration: 'none' }} to="/">
            <Typography
              sx={{
                color: '#1976d2',
                ':hover': { color: 'red' },
                fontWeight: 'bold',
              }}
            >
              Start
            </Typography>
          </NavLink>
        </Button>
      )}
    </Box>
  );
};
