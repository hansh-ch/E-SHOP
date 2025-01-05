import { verifyAuth } from "@/services/authAPIServices";
import { loginUser } from "@/slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function AuthProtect({ children }) {
  const user = useSelector((state) => state.user);
  const isAuthenticated = user?.isAuthenticated;
  const currUser = user?.currentUser;

  // let user = {
  //   role: "user",
  // };
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    function () {
      const checkAuth = async () => {
        const data = await verifyAuth().catch((err) => {
          console.log("error");
        });
        if (!data) return;
        dispatch(loginUser(data?.data));
        if (isAuthenticated) {
          navigate("/shop");
        }
      };
      checkAuth();
    },
    [dispatch, isAuthenticated]
  );
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return isAuthenticated && <>{children}</>;
}
