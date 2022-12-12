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
          fontWeight: 'bold',
          border: '1px solid white',
          backgroundColor: '#f7e9c4',
          borderRadius: 1,
          ':focus-within': { backgroundColor: '#cbba83' },
        }}
        size="small"
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <Typography
          sx={{
            color: '#1976d2',
            ':hover': { color: 'red' },
            fontWeight: 'bold',
          }}
        >
          Log out
        </Typography>
      </Button>
    </Box>
  );
};
