import { Button } from '../../node_modules/@mui/material/index';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Box } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box>
      {isLoggedIn ? (
        <Button
          size="small"
          variant="contained"
          sx={{
            maxHeight: '25px',
            fontWeight: 'bold',
            border: '1px solid white',
            backgroundColor: '#f7e9c4',
            borderRadius: 1,
            padding: '5px',
          }}
        >
          <NavLink
            to="/contacts"
            style={{
              textDecoration: 'none',
              color: 'red',
            }}
          >
            Contacts
          </NavLink>
        </Button>
      ) : (
        <Button
          size="small"
          variant="contained"
          sx={{
            maxHeight: '25px',
            fontWeight: 'bold',
            border: '1px solid white',
            backgroundColor: '#f7e9c4',
            borderRadius: 1,
            padding: '5px',
          }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: 'none',
              color: 'red',
            }}
          >
            Start
          </NavLink>
        </Button>
      )}
    </Box>
  );
};
