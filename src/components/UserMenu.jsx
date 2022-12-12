import { useDispatch } from 'react-redux';
import { logOut } from '../redux/authOperations';
import { useAuth } from '../hooks/useAuth';
import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: '5px', sm: '20px' },
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'inherit' },
      }}
    >
      <Typography
        component="label"
        variant="navigation"
        color="#f7e9c4"
        sx={{ fontSize: { xs: 18, sm: 22, md: 26 } }}
      >
        Welcome, {user.name}
      </Typography>
      <Button
        sx={{
          ':hover': {
            color: '#f7e9c4',
          },
          maxHeight: '25px',
          fontWeight: 'bold',
          color: '#1976d2',
          border: '1px solid white',
          backgroundColor: '#f7e9c4',
        }}
        size="small"
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </Box>
  );
};