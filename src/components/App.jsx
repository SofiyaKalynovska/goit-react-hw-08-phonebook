import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/authOperations';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';

const RegisterPage = lazy(() => import('../pages/Register'));
const LogInPage = lazy(() => import('../pages/LogIn'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="login" />} />
        <Route path="register" element={<RegisterPage />} />
        debugger
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogInPage />} />
          }
        />
        ;{/* <Route path="login" element={< LogInPage /> } /> */}
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

