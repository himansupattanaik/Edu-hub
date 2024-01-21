import { Allcourses, HeroSection } from "@/components/home";
import Feedback from "@/components/home/Feedback";
import InstructorSections from "@/components/home/Instructor";
import { PublicLayout } from "@/layouts";
import { Children } from "react";

export default function Home() {
  return (
    <PublicLayout>
      <HeroSection />
      <Allcourses />
      <InstructorSections />
      <Feedback />
    </PublicLayout>
  );
}
