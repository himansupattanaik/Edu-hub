import { AdminLayout } from "@/layouts";
import React from "react";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <section className="flex justify-center items-center h-screen">
        <p className="text-gray-800 font-semibold">Admin DashBoard</p>
      </section>
    </AdminLayout>
  );
};

export default AdminDashboard;
