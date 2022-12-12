
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { useAuth } from '../hooks/useAuth';
import { Navigation } from './Navigation';
import { Box } from '@mui/material';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      as="header"
      p={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#1976d2',
        alignItems: 'center',
        borderRadius: 2,
        background:
          'linear-gradient(180deg, rgba(3,39,102,1) 0%, rgba(25,118,210,1) 71%, rgba(0,157,255,1)100%)',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
