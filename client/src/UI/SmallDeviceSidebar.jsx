import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { NavLink, useNavigate } from "react-router-dom";
import {
  House,
  ShoppingCart,
  SquareChevronDown,
  SquareChevronUp,
  UserPen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
export default function SmallDeviceSidebar({ open, setOpen }) {
  const navigate = useNavigate();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="w-64">
        <div className="flex flex-col h-full">
          <SheetHeader className="border-b">
            <SheetTitle className="flex items-center">
              <div className="flex items-center gap-2 cursor-pointer">
                <h1 className="text-xl font-bold">E-Shop</h1>
              </div>
            </SheetTitle>
            <SheetDescription></SheetDescription>
            <ul className="flex flex-col gap-4 items-center me-auto">
              <li className="text-left w-[120px] border border-green-200 p-3 shadow-sm rounded-sm">
                <NavLink to="/shop" className="flex ">
                  <House className="mr-4" />
                  Home
                </NavLink>
              </li>
              <li className="text-left w-[120px] border border-green-200 p-3 shadow-sm rounded-sm">
                <NavLink to="/shop/listings" className="flex ">
                  <SquareChevronUp className="mr-4" />
                  Men
                </NavLink>
              </li>
              <li className="text-left border border-green-200 p-3 shadow-sm rounded-sm w-[120px]">
                <NavLink to="/shop/listings" className="flex ">
                  <SquareChevronDown className="mr-4" />
                  Women
                </NavLink>
              </li>
              <li className="text-left w-[120px] border border-green-200 p-3 shadow-sm rounded-sm">
                <NavLink to="/shop/cart" className="flex ">
                  <ShoppingCart className="mr-4" />
                  Cart
                </NavLink>
              </li>
              <li className="text-left w-[120px] border border-green-200 p-3 shadow-sm rounded-sm">
                <NavLink to="/account" className="flex">
                  <UserPen className="mr-4" />
                  <span>Account</span>
                </NavLink>
              </li>
              <li>
                <Button onClick={() => navigate("/admin")} className="">
                  <span>Admin Page</span>
                </Button>
              </li>
            </ul>
          </SheetHeader>
          <div className="mt-4"></div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
