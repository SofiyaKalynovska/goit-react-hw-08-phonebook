
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { useAuth } from '../hooks/useAuth';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
