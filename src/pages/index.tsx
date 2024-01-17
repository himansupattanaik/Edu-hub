import { Allcourses, HeroSection } from "@/components/home";
import InstructorSections from "@/components/home/Instructor";
import { PublicLayout } from "@/layouts";
import { Children } from "react";

export default function Home() {
  return (
    <PublicLayout>
      <HeroSection />
      {/* <Allcourses /> */}
      {/* <InstructorSections /> */}
    </PublicLayout>
  );
}
