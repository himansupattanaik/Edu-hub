import { PublicLayout } from "@/layouts";
import React from "react";

const MyProfile = () => {
  return (
    <PublicLayout>
      <section className="flex flex-row justify-center items-center h-screen">
        <div className="text-gray-900 text-5xl font-semibold">MY Profile</div>
      </section>
    </PublicLayout>
  );
};

export default MyProfile;
