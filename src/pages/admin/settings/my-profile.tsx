import { AdminLayout } from "@/layouts";
import React from "react";

const AdminProfile = () => {
  return (
    <AdminLayout title="Manage Profile | Edu-Hub-Learning">
      <section className="flex justify-center items-center h-screen">
        <p className="text-gray-800 font-semibold">Manage Tutors</p>
      </section>
    </AdminLayout>
  );
};

export default AdminProfile;
