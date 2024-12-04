import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>

      <div className="bg-slate-900 text-center py-5">
        Made By 💖 Aditya Gawande
      </div>
    </div>
  );
}

export default AppLayout;
