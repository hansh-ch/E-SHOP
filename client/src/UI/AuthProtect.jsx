import { verifyAuth } from "@/services/authAPIServices";
import { loginUser } from "@/slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function AuthProtect({ children }) {
  const user = useSelector((state) => state.user);
  const isAuthenticated = user?.isAuthenticated;
  const currUser = user?.currentUser;
  // let user = {
  //   role: "user",
  // };
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(
    function () {
      const checkAuth = async () => {
        const data = await verifyAuth().catch((err) => {
          console.log(err);
          // toast.error(err.response.data.message);
        });
        // console.log(data.data);
        dispatch(loginUser(data?.data));
      };
      checkAuth();
    },
    [dispatch, isAuthenticated]
  );
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
