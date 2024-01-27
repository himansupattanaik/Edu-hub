import CourseCard from "@/components/cards/CourseCard";
import { CommonHeroSection } from "@/components/core";
import { useCategories } from "@/hooks/useCategory";
import { useCourses } from "@/hooks/useCourse";
import PublicLayout from "@/layouts/public";
import { useState } from "react";

const AllCourses = () => {
  const { allCategories } = useCategories();
  const { allCourses } = useCourses();

  console.log("allCategories--->", allCategories);
  console.log("allCourses--->", allCourses);

  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredCourses = selectedCategory
    ? allCourses?.filter(
        (course) => course?.courseCategoryId === selectedCategory
      )
    : allCourses;

  //   const uniqueCategories = Array.from(
  //     new Set(COURSE_DATA.map((course) => course.category))
  //   );

  return (
    <PublicLayout title="Courses | Edu-Hub-Learning">
      <>
        <CommonHeroSection title="All Courses" />
        <div className="main-container my-9">
          <h1 className="text-4xl font-bold my-8">Explore Our Courses</h1>
          <div className="mb-12">
            <p className="font-semibold text-gray-600 mb-4">
              Filter by Category:
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedCategory("")}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === ""
                    ? "bg-primary/90 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                All
              </button>
              {allCategories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setSelectedCategory(category?.id)}
                  className={`px-4 py-2 rounded-md ${
                    selectedCategory === category?.id
                      ? "bg-primary/70 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {category?.categoryName}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((singleCourse) => (
              <CourseCard key={singleCourse?.id} course={singleCourse} />
            ))}
          </div>
        </div>
      </>
    </PublicLayout>
  );
};

export default AllCourses;
