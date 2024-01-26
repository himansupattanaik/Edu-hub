import Link from "next/link";
import { useState } from "react";

export interface COURSE_CARD_TYPE {
  id: number;
  courseName: string;
  image: string;
  description: string;
  category: string;
}

const CourseCard = ({ course }: { course: COURSE_CARD_TYPE }) => {
  return (
    <div className="border border-gray-300 rounded-md hover:border-primary/70 hover:scale-105 common transition hover:bg-green-100/20 overflow-hidden shadow-lg  hover:shadow-2xl shadow-blue-500/20">
      <img src={course.image} alt={course.courseName} className="w-full h-48" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{course.courseName}</h2>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">{course.category}</p>
          <Link href={`courses/${course.id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900 common-transition">
              view Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
