import { NavLink } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box 
      sx={{
        m: {xs: "5px", sm: "0px"},
        display: 'flex',
        gap: { xs: '5px', sm: '20px' },
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'inherit' },
      }}
    >
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
        <NavLink style={{ textDecoration: 'none' }} to="/register">
          <Typography
            sx={{
              color: '#1976d2',
              ':hover': { color: 'red' },
              fontWeight: 'bold',
            }}
          >
            Register
          </Typography>
        </NavLink>
      </Button>
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
        <NavLink style={{ textDecoration: 'none' }} to="/login">
          <Typography
            sx={{
              color: '#1976d2',
              ':hover': { color: 'red' },
              fontWeight: 'bold',
            }}
          >
            Log in
          </Typography>
        </NavLink>
      </Button>
    </Box>
  );
};
