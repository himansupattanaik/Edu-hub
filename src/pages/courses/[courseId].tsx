import { CommonHeroSection } from "@/components/core";
import {
  DetailsPageHeroSection,
  DetailsPageLeftSide,
  DetailsPageRightSide,
  DownloadSection,
} from "@/components/DetailsPage";
import DetailsPageMainSection from "@/components/DetailsPage/DetailsPageMainSection";
import { PublicLayout } from "@/layouts";
import React from "react";

const CourseDetailsPage = () => {
  return (
    <PublicLayout>
      <CommonHeroSection title="Course Details" />
      <section className="w-full main-container flex md:flex-row flex-col justify-between gap-10">
        {/* left side  */}
        <aside className="md:w-[70%] w-full">
          <DetailsPageHeroSection />
          <DetailsPageMainSection />
        </aside>
        {/* right side  */}
        <aside className="md:w-[30%] w-full">
          <DetailsPageRightSide />
        </aside>
      </section>
    </PublicLayout>
  );
};

export default CourseDetailsPage;
