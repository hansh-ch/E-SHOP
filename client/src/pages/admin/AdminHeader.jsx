import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoutUserAPI } from "@/services/authAPIServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/slices/userSlice";

export default function AdminHeader({ setOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogout() {
    const res = await logoutUserAPI();
    if (res.status === "success") {
      dispatch(logoutUser());
      navigate("../auth/login");
    }
  }
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button className="lg:hidden block" onClick={() => setOpen(true)}>
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end items-center">
        <Button
          className="inline-flex rounded-md hover:opacity-90"
          onClick={handleLogout}
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}
