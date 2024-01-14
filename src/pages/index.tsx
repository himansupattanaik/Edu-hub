import DetailsPageMainSection from "@/components/DetailsPage/DetailsPageMainSection";
import Allcourses from "@/components/home/AllCourse";
import Herosection from "@/components/home/HeroSection";
import InstructorSection from "@/components/home/InstructorSection";
import { PublicLayout } from "@/layouts";

export default function Home() {
  return (
    <PublicLayout>
      <Herosection />
      <Allcourses />
      <InstructorSection />
      <DetailsPageMainSection />
    </PublicLayout>
  );
}
