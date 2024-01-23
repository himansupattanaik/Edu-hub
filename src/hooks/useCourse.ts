import { useState, useEffect } from "react";

export const useCourses = () => {
  const courseKey = "courseData";
  const [allCourses, setAllCourses] = useState<any[]>([]);

  useEffect(() => {
    // Fetch courses from local storage on component mount
    const courses =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem(courseKey) || "[]")
        : [];

    setAllCourses(courses);
  }, []);

  const updateCourses = (updatedCourses: any) => {
    // Update local storage with the modified array
    localStorage.setItem(courseKey, JSON.stringify(updatedCourses));

    // Update state to trigger re-render
    setAllCourses([...updatedCourses]); // Spread the array to create a new reference
  };

  return { allCourses, updateCourses };
};
