import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Typography } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <NavLink
          style={({ isActive }) => ({
            padding: '5px',
            border: '1px solid white',
            borderRadius: '10%',
            textDecoration: 'none',
            background: isActive ? '#cbba83' : '#f7e9c4',
          })}
          to="/contacts"
        >
          <Typography
            sx={{
              color: '#1976d2',
              ':hover': { color: 'red' },
              fontWeight: 'bolder',
            }}
          >
            CONTACTS
          </Typography>
        </NavLink>
      ) : (
        <NavLink
          style={({ isActive }) => ({
            padding: '5px',
            border: '1px solid white',
            borderRadius: '10%',
            textDecoration: 'none',
            background: isActive ? '#cbba83' : '#f7e9c4',
          })}
          to="/"
        >
          <Typography
            sx={{
              color: '#1976d2',
              ':hover': { color: 'red' },
              fontWeight: 'bolder',
            }}
          >
            START
          </Typography>
        </NavLink>
      )}
    </>
  );
};
