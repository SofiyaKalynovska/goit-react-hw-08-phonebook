
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { useAuth } from '../hooks/useAuth';
import { Navigation } from './Navigation';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
