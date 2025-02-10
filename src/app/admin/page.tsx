"use client";

import React from "react";
import { AdminDashboard } from "@/components/Admin/AdminDashboard";
import { TopBar } from "@/components/Dashboard/TopBar";

export default function AdminPage() {
  return (
    <main className="container mx-auto p-4">
      <TopBar className="mt-0" />
      <AdminDashboard />
    </main>
  );
}
