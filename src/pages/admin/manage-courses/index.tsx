import { AddCourseDialog, UpdateCourseDialog } from "@/components/forms";
import { useCourses } from "@/hooks/useCourse";
import { AdminLayout } from "@/layouts";
import { sliceSentence } from "@/utils/SliceSentence";
import { DeleteOutline, Preview, Search } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageCourses = () => {
  const { allCourses, updateCourses } = useCourses();
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  const filteredCourses = allCourses.filter((course) =>
    course.courseName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <AdminLayout title="Manage Course | Edu-Hub-Learning ">
      <h1 className="text-3xl font-semibold text-center text-primary">
        All Courses
      </h1>
      <div className="flex lg:mb-6 my-4 gap-6 items-center lg:justify-end lg:mr-9">
        <div className="flex gap-2 bg-white items-center px-2 rounded-lg">
          <Search className="text-3xl text-gray-700" />
          <input
            type="search"
            value={searchValue}
            onChange={handleSearch}
            className="outline-none p-2 text-lg font-medium focus:border-primary"
            placeholder="search Courses"
          />
        </div>
      </div>
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:min-h-[12rem] min-h-[5rem]">
            <AddCourseDialog
              updateCourses={updateCourses}
              allCourses={allCourses}
            />
          </div>
          {filteredCourses?.map((data: any) => (
            <CourseCard
              key={data?._id}
              course={data}
              updateCourses={updateCourses}
              allCourses={allCourses}
            />
          ))}
        </div>
      </section>
    </AdminLayout>
  );
};

export const CourseCard = ({ course, updateCourses, allCourses }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteCourse = async (ID: any) => {
    try {
      setIsLoading(true);
      Swal.fire({
        title: "Warning",
        text: "Are you sure you want to delete",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#10b981",
        cancelButtonColor: "#d33",
        confirmButtonText: "yes",
        cancelButtonText: "No cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          //logic of local remove for delete
          // Filter out the category to be deleted
          const updatedCourse = allCourses.filter(
            (EachCourse: any) => EachCourse.id !== ID
          );
          updateCourses(updatedCourse);
          toast.success("Course deleted successfully...");
        }
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-full border border-primary/40  bg-[#e5f4ed] rounded-3xl">
          <div className="flex items-center space-x-2">
            <svg
              className="animate-spin h-5 w-5 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4.709zM12 20a8 8 0 01-8-8H0c0 6.627 5.373 12 12 12v-4zm-2-7a6 6 0 016-6V0C11.373 0 6 5.373 6 12h4z"
              ></path>
            </svg>
            <p className="text-lg font-semibold text-primary">Deleting</p>
          </div>
        </div>
      ) : (
        <article className="relative group flex flex-col  bg-[#e5f4ed] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-3xl  overflow-hidden">
          <div className="flex justify-center py-2  bg-primary"></div>
          <div className=" flex justify-center px-4">
            <img
              src={course?.thumbnailImage}
              alt=""
              className="h-48 w-52 mt-2 object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1.5 px-4 py-2">
            <p className=" tracking-wide font-semibold text-primary  capitalize">
              <span>courseName</span>
              <span className="text-gray-600 font-medium ml-2">
                {course?.courseName}
              </span>{" "}
            </p>
            <p className=" tracking-wide font-semibold text-primary  capitalize">
              <span>Category</span>
              <span className="text-primary font-medium ml-2">
                {course?.courseCategoryName}
              </span>
            </p>
            <p className="tracking-wide font-semibold text-primary  capitalize">
              <span>Description</span>
              <span className="text-primary font-medium ml-2">
                {sliceSentence(course?.description, 20)}
              </span>
            </p>
            <p className="font-semibold text-primary">
              <span>mrp price</span>
              <span className="font-medium text-primary line-through ml-2">
                {course?.mrpPrice}
              </span>
            </p>
            <p className="font-semibold text-primary">
              <span>sales price</span>
              <span className="font-medium text-primary ml-2">
                {course?.salePrice}
              </span>
            </p>
            <p className="font-semibold text-primary">
              <span>lectures</span>
              <span className="font-medium text-primary line-through ml-2">
                {(course?.lectureCount && course?.lectureCount) || 0}
              </span>
            </p>
          </div>

          <div className=" invisible absolute top-14 right-0 opacity-0 flex flex-col gap-2 common-transition group-hover:right-2 group-hover:opacity-100 group-hover:visible">
            <Link href={`/admin/manage-courses/course/${course?.id}`}>
              <Tooltip
                title="view lectures"
                followCursor
                placement="top-start"
                arrow
              >
                <button className="w-8 h-8 grid place-items-center rounded-full border border-emerald-500 bg-emerald-500/10 text-emerald-500">
                  <Preview fontSize="small" />
                </button>
              </Tooltip>
            </Link>

            <UpdateCourseDialog
              course={course}
              allCourses={allCourses}
              updateCourses={updateCourses}
            />
            <Tooltip
              title="delete course"
              followCursor
              placement="top-start"
              arrow
            >
              <button
                className="w-8 h-8 grid place-items-center rounded-full border border-red-500 bg-red-500/10 text-red-500"
                onClick={() => handleDeleteCourse(course?.id)}
              >
                <DeleteOutline fontSize="small" />
              </button>
            </Tooltip>
          </div>
        </article>
      )}
    </>
  );
};

export default ManageCourses;

const courses = [
  {
    id: "56759956",
    courseName: "course 1",
    description: "",
    category: "", // these will be select from category array which are created before categories array in local storage
    image: "",
    price: "",
    duration: "",
    lectureCount: "3", // there are 3 lecture so that
    lectures: [
      {
        lectureId: "",
        title: "lesson 1",
        contents: ["text 1", "text 2", "text 3"],
        videos: ["video 1 Upload ", "video 2 upload", " video 3 upload"],
      },
      {
        lectureId: "",
        title: "lesson 2",
        contents: ["text 1", "text 2", "text 3"],
        videos: ["video 1 Upload ", "video 2 upload", " video 3 upload"],
      },
      {
        lectureId: "",
        title: "lesson 3",
        contents: ["text 1", "text 2", "text 3"],
        videos: ["video 1 Upload ", "video 2 upload", " video 3 upload"],
      },
    ],
    // these below will vary per student by default it will false ,
    isInCart: "", // false
    isPurchased: "", // false
    studentDetails: {
      // no one
      studentId: "",
      name: "",
      email: "",
    },
  },
  {
    id: "45469956",
    courseName: "course 2",
    description: "",
    category: "", // these will be select from category array which are created before categories array in local storage
    image: "",
    price: "",
    duration: "",
    lectureCount: "3", // there are 3 lecture so that
    lectures: [
      {
        title: "lesson 1",
        contents: ["text 1", "text 2", "text 3"],
        videos: ["video 1 Upload ", "video 2 upload", " video 3 upload"],
      },
      {
        title: "lesson 2",
        contents: ["text 1", "text 2", "text 3"],
        videos: ["video 1 Upload ", "video 2 upload", " video 3 upload"],
      },
      {
        title: "lesson 3",
        contents: ["text 1", "text 2", "text 3"],
        videos: ["video 1 Upload ", "video 2 upload", " video 3 upload"],
      },
    ],
    // these below will vary per student by default it will false ,
    isInCart: "", // false
    isPurchased: "", // false
    studentDetails: {
      // no one
      studentId: "",
      name: "",
      email: "",
    },
  },
];
