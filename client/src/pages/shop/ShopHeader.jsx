import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  HousePlug,
  LogOut,
  Menu,
  ShoppingCart,
  User,
  UserPen,
} from "lucide-react";
import { useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ShopHeader({ open, setOpen }) {
  const user = useSelector((state) => state.user?.currentUser);
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
            <NavLink to="/shop/cart" className="flex gap-1">
              <ShoppingCart />
              Cart
            </NavLink>
            <NavLink
              to="/users/profile"
              className="flex items-center"
            ></NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <User />
                  {user?.username}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                <DropdownMenuItem>
                  <Link className="flex gap-3 items-center">
                    <UserPen />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                {user?.role === "admin" && (
                  <DropdownMenuItem>
                    <Link className="flex gap-3 items-center">
                      <span>Admin-Home</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem>
                  <button className="flex gap-3 items-center">
                    <LogOut />
                    <span>Logout</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
        </div>
      </header>
      ;
    </>
  );
}
