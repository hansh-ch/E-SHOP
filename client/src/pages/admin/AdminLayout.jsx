import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto flex">
      {/* SIDEBAR */}
      <AdminSidebar />
      <div className="flex flex-col flex-1">
        {/* ADMIN HEADER */}
        <AdminHeader />
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
