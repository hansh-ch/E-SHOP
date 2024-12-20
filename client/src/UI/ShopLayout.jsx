import ShopHeader from "@/pages/shop/ShopHeader";
import React from "react";
import { Outlet } from "react-router-dom";

export default function ShopLayout() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto overflow-hidden">
      {/* Header */}
      <ShopHeader />
      {/* flex flex-col w-full */}
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
