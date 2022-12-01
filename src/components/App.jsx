import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';

const RegisterPage = lazy(() => import('../pages/Register'));
const LogInPage = lazy(() => import('../pages/LogIn'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Route>
    </Routes>
  );
};
