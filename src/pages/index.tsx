import { Allcourses, HeroSection } from "@/components/home";
import Feedback from "@/components/home/Feedback";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import InstructorSections from "@/components/home/Instructor";
import { PublicLayout } from "@/layouts";
import { Children } from "react";

export default function Home() {
  return (
    <PublicLayout title="Edu-Hub-Learning">
      <HeroSection />
      <Allcourses />
      <InstructorSections />
      <HowItWorksSection />

      <Feedback />
    </PublicLayout>
  );
}
