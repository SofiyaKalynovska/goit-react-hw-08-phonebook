import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      {isLoggedIn ?
        <Link to="/contacts">
          Contacts
        </Link>
       : <Link to="/">Start</Link>}
      
    </nav>
  );
};
