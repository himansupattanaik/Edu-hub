import { CommonHeroSection } from "@/components/core";
import { PublicLayout } from "@/layouts";
import React from "react";

const FaqPage = () => {
  return (
    <PublicLayout title="FAQs | Edu-Hub-Learning">
      <CommonHeroSection title="FAQs" />
      <section className="flex flex-col justify-center h-[60vh] ">
        <p className="text-primary text-7xl font-extrabold text-center">
          UNDER MAINTENANCE
        </p>
      </section>
    </PublicLayout>
  );
};

export default FaqPage;
