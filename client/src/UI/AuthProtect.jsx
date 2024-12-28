import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function AuthProtect({ children }) {
  const user = useSelector((state) => state.user);
  const isAuthenticated = user?.isAuthenticated;
  const currUser = user.currentUser;
  // let user = {
  //   role: "user",
  // };
  const location = useLocation();

  if (isAuthenticated && location.pathname.includes("/login")) {
    if (currUser?.role === "admin") {
      return <Navigate to="/admin" />;
    }
    if (currUser?.role === "user") {
      return <Navigate to="/shop" />;
    }
  }
  if (
    isAuthenticated &&
    currUser?.role === "admin" &&
    location.pathname.includes("/shop")
  ) {
    return <Navigate to="/admin" />;
  }
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth/login" />;
}
