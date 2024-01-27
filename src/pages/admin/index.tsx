import { useCategories } from "@/hooks/useCategory";
import { useCourses } from "@/hooks/useCourse";
import { useLectures } from "@/hooks/useLectures";
import { AdminLayout } from "@/layouts";
import React from "react";

const AdminDashboard = () => {
  const { allCategories } = useCategories();
  const { allCourses } = useCourses();
  const { allLectures } = useLectures();
  return (
    <AdminLayout title="DashBoard | Edu-Hub-Learning">
      <section className="flex justify-center items-center w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 mx-3">
          <AdminDashboardCard
            title="Total Categories"
            value={allCategories?.length}
          />
          <AdminDashboardCard
            title="Total Courses"
            value={allCourses?.length}
          />
          <AdminDashboardCard
            title="Total Lectures"
            value={allLectures?.length}
          />
          <AdminDashboardCard
            title="Total Categories"
            value={allCategories?.length}
          />
          <AdminDashboardCard
            title="Total Courses"
            value={allCourses?.length}
          />
          <AdminDashboardCard
            title="Total Lectures"
            value={allLectures?.length}
          />
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminDashboard;

const AdminDashboardCard = ({ title, value }: any) => {
  return (
    <section className="bg-white min-h-[11rem] w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg flex justify-center items-center">
      <div className="space-y-3">
        <p className="text-2xl font-semibold text-primary">{title}</p>
        <p className="text-2xl text-gray-700 text-center">{value}</p>
      </div>
    </section>
  );
};
