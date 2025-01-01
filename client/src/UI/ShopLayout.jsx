import ShopHeader from "@/pages/shop/ShopHeader";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SmallDeviceSidebar from "./SmallDeviceSidebar";

export default function ShopLayout() {
  const [isNavSideOpen, setIsNavSide] = useState(false);
  return (
    <div className="min-h-screen max-w-6xl mx-auto overflow-hidden">
      {/* Header */}
      <ShopHeader setOpen={setIsNavSide} />
      {/* flex flex-col w-full */}
      <main className="w-full">
        <SmallDeviceSidebar setOpen={setIsNavSide} open={isNavSideOpen} />
        <Outlet />
      </main>
    </div>
  );
}
