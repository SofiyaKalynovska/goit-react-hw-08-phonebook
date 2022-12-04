import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router-dom"

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}