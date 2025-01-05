import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto flex">
      <div className="hidden lg:flex items-center  bg-black w-1/2  h-screen justify-center">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-xl lg:text-4xl tracking-tight font-bold">
            Welcome to E-Shop
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}
