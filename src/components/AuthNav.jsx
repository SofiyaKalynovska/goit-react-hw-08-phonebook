import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        m: { xs: '5px', sm: '0px' },
        display: 'flex',
        gap: { xs: '5px', sm: '20px' },
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'inherit' },
      }}
    >
      <NavLink
        style={({ isActive }) => ({
          padding: '5px',
          border: '1px solid white',
          borderRadius: '10%',
          textDecoration: 'none',
          background: isActive ? '#cbba83' : '#f7e9c4',
        })}
        to="/register"
      >
        <Typography
          sx={{
            color: '#1976d2',
            ':hover': { color: 'red' },
            fontWeight: 'bolder',
          }}
        >
          REGISTER
        </Typography>
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          padding: '5px',
          border: '1px solid white',
          borderRadius: '10%',
          textDecoration: 'none',
          background: isActive ? '#cbba83' : '#f7e9c4',
        })}
        to="/login"
      >
        <Typography
          sx={{
            color: '#1976d2',
            ':hover': { color: 'red' },
            fontWeight: 'bolder',
          }}
        >
          LOG IN
        </Typography>
      </NavLink>
    </Box>
  );
};
