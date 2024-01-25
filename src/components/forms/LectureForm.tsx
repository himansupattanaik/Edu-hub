// LectureForm.jsx

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useCourses } from "@/hooks/useCourse";
import useCoursesAndLectures from "@/hooks/useCourseAndLectures";

const LectureForm = ({
  open,
  isEdit,
  handleClose,
  data,
  allLectures,
  updateLectures,
}: any) => {
  const router = useRouter();
  const { addOrUpdateLecture } = useCoursesAndLectures();
  const initialValues = {
    lectureTitle: "",
    lectureDescription: "",
  };

  const formik = useFormik({
    initialValues: isEdit
      ? {
          lectureTitle: data?.lectureTitle,
          lectureDescription: data?.lectureDescription,
        }
      : initialValues,
    validationSchema: yup.object({
      lectureTitle: yup
        .string()
        .required("Lecture title is required")
        .min(3, "Lecture title must be at least 3 characters")
        .max(50, "Lecture title cannot exceed 50 characters"),
      lectureDescription: yup
        .string()
        .required("Lecture description is required"),
    }),
    onSubmit: async (values: any, { resetForm }: any) => {
      try {
        let updatedLectures;
        const courseId = router?.query?.courseId;

        if (isEdit) {
          // Update existing lecture
          updatedLectures = allLectures.map((lecture: any) =>
            lecture.id === data?.id
              ? { ...lecture, ...values, courseId: router?.query?.courseId }
              : lecture
          );

          // Update state to trigger re-render
          updateLectures(updatedLectures);
          // addOrUpdateLecture(courseId, {
          //   ...values,
          //   id: data?.id,
          //   courseId,
          // });
        } else {
          // Create new lecture
          const newLecture = {
            id: new Date().getTime().toString(),
            courseId: router?.query?.courseId,
            ...values,
          };
          updatedLectures = [...allLectures, newLecture];
          // Update state to trigger re-render
          updateLectures(updatedLectures);
          // addOrUpdateLecture(courseId, newLecture);
        }

        handleClose();
        resetForm();
      } catch (error) {
        console.error("Error updating lectures:", error);
      }
    },
  });

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      <DialogTitle className="flex items-center justify-center">
        <p className="text-3xl font-bold py-2">
          {isEdit ? "Update lecture" : "Add Lecture"}
        </p>
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="text-lg text-gray-600  col-span-12">
              Lecture Title
              <span className="ml-1 text-red-500"> *</span>
              <input
                type="text"
                name="lectureTitle"
                placeholder="Enter lecture title"
                value={formik.values.lectureTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full col-span-12 mt-6 overflow-hidden border-b-2 border-gray-300 focus:outline-none focus:border-primary"
              />
            </div>

            <div className="text-lg text-gray-600  col-span-12">
              Lecture Description
              <span className="ml-1 text-red-500"> *</span>
              <textarea
                name="lectureDescription"
                placeholder="Enter lecture description"
                value={formik.values.lectureDescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full col-span-12 mt-6 overflow-hidden border-b-2 border-gray-300 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="w-full flex items-center justify-center mt-6">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className={`bg-primary/90 px-8 py-3 text-xl font-bold text-gray-100 hover:bg-primary duration-300 rounded-md ${
                  formik.isSubmitting ? "opacity-50" : "opacity-100"
                }`}
              >
                {isEdit ? "Update" : "Add Lecture"}
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
      <DialogActions className="absolute top-2 right-3">
        <Close onClick={handleClose} className="text-red-600 cursor-pointer" />
      </DialogActions>
    </Dialog>
  );
};

export default LectureForm;

// const addNewLecture = () => {
//   // Find the course in the courseData array based on courseId
//   const courseIndex = allCourses.findIndex(
//     (course) => course.id === router?.query?.courseId
//   );

//   // Check if the course exists
//   if (courseIndex !== -1) {
//     // Add the new lecture to the lectures array of the course
//     if (!allCourses[courseIndex].lectures) {
//       allCourses[courseIndex].lectures = [];
//     }

//     // Directly use the newLecture object created in the onSubmit function
//     const newLecture = {
//       id: new Date().getTime().toString(),
//       courseId: router?.query?.courseId,
//       lectureTitle: formik.values.lectureTitle,
//       lectureDescription: formik.values.lectureDescription,
//       // Add other lecture properties as needed
//     };

//     allCourses[courseIndex].lectures.push(newLecture);

//     // Update the lectureCount property of the course
//     allCourses[courseIndex].lectureCount =
//       allCourses[courseIndex].lectures.length;

//     // Update the courses in local storage and state
//     updateCourses(allCourses);
//   }
// };
