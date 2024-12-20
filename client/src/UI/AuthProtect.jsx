import { Navigate, useLocation } from "react-router-dom";

export default function AuthProtect({ children }) {
  const isAuthenticated = true;
  let user;
  const location = useLocation();

  if (isAuthenticated && location.pathname.includes("/login")) {
    if (user?.role === "admin") {
      return <Navigate to="/admin" />;
    }
    if (user?.role === "user") {
      return <Navigate to="/shop" />;
    }
  }
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/shop")
  ) {
    return <Navigate to="/admin" />;
  }
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth/login" />;
}
