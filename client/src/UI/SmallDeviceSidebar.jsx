import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import { House, ShoppingCart } from "lucide-react";
export default function SmallDeviceSidebar({ open, setOpen }) {
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
              <NavLink to="/shop" className="flex gap-1">
                <House />
                Home
              </NavLink>
              <NavLink to="/shop/listings" className="flex gap-1">
                Men
              </NavLink>
              <NavLink to="/shop/listings" className="flex gap-1">
                Women
              </NavLink>
              <NavLink to="/shop/cart" className="flex gap-1">
                <ShoppingCart />
                Cart
              </NavLink>
              <NavLink
                to="/users/profile"
                className="flex items-center"
              ></NavLink>
            </ul>
          </SheetHeader>
          <div className="mt-4"></div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
