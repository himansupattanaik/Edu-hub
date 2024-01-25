// useCoursesAndLectures.js

import { useCourses } from "./useCourse";

const useCoursesAndLectures = () => {
  const { allCourses, updateCourses } = useCourses();

  const addOrUpdateLecture: any = (courseId: any, lecture: any) => {
    updateCourses((prevCourses: any) => {
      const updatedCourses: any = [...prevCourses];
      const courseIndex: any = updatedCourses.findIndex(
        (course: any) => course.id === courseId
      );

      if (courseIndex !== -1) {
        const course = updatedCourses[courseIndex];

        if (!course.lectures) {
          course.lectures = [];
        }

        const lectureIndex: any = course.lectures.findIndex(
          (lec: any) => lec.id === lecture.id
        );

        if (lectureIndex !== -1) {
          // Update existing lecture
          course.lectures[lectureIndex] = lecture;
        } else {
          // Add new lecture
          course.lectures.push(lecture);
        }

        // Update lectureCount property of the course
        course.lectureCount = course.lectures.length;
      }

      return updatedCourses;
    });
  };

  return {
    allCourses,
    updateCourses: updateCourses,
    addOrUpdateLecture,
  };
};

export default useCoursesAndLectures;
