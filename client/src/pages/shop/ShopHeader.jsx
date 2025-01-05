import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  HousePlug,
  LogOut,
  Menu,
  ShoppingCart,
  User,
  UserPen,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutUserAPI } from "@/services/authAPIServices";
import { logoutUser } from "@/slices/userSlice";

export default function ShopHeader({ open, setOpen }) {
  const user = useSelector((state) => state.user?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogout() {
    const res = await logoutUserAPI();
    if (res.status === "success") {
      dispatch(logoutUser());
      navigate("../auth/login");
    }
  }
  return (
    <>
      <header className="sticky top-0 z-20 w-full bg-background border-b">
        <div className="h-16 flex items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" to="/shop">
            <HousePlug className="h-6 w-6" />
            <p className="text-xl text-slate-800">E-Shop</p>
          </Link>
          <div className="md:hidden">
            <Button className="w-6 h-6" onClick={() => setOpen(true)}>
              <Menu />
            </Button>
          </div>
          <ul className="gap-4 items-center hidden md:flex">
            <NavLink to="/shop">Home</NavLink>
            <NavLink to="/shop/listings">Men</NavLink>
            <NavLink to="/shop/listings">Women</NavLink>
            <NavLink to="/shop/listings">Kids</NavLink>
            <NavLink to="/shop/listings">Footwear</NavLink>
            <NavLink to="/shop/listings">Accessories</NavLink>
          </ul>
          <div className="md:flex items-center gap-4 hidden ">
            {user?.role === "admin" && (
              <Link
                className="flex gap-3 items-center border border-green-500 p-2 rounded-sm"
                to="/admin"
              >
                <span>Admin Page</span>
              </Link>
            )}
            <NavLink to="/shop/cart" className="flex gap-1">
              <ShoppingCart className="w-6" />
              Cart
            </NavLink>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <User />
                    {user?.username}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                  <DropdownMenuItem>
                    <Link className="flex gap-3 items-center" to="/account">
                      <UserPen />
                      <span>Account</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <button
                      className="flex gap-3 items-center"
                      onClick={handleLogout}
                    >
                      <LogOut />
                      <span>Logout</span>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"></div>
          </div>
        </div>
      </header>
    </>
  );
}
