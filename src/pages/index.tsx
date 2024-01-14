import { AllCourse, HeroSection } from "@/components/home";
import InstructorSection from "@/components/home/InstructorSection";
import { PublicLayout } from "@/layouts";

export default function Home() {
  return (
    <PublicLayout>
      <HeroSection />
      {/* <AllCourse /> */}
      {/* <InstructorSection /> */}
    </PublicLayout>
  );
}
