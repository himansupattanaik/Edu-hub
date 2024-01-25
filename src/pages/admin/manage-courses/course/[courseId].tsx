import { LectureForm } from "@/components/forms";
import useCoursesAndLectures from "@/hooks/useCourseAndLectures";
import { useLectures } from "@/hooks/useLectures";
import { AdminLayout } from "@/layouts";
import { Add, DeleteOutline, Edit, Preview } from "@mui/icons-material";
import { CircularProgress, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AllLectures = () => {
  const router = useRouter();
  const { allLectures, updateLectures } = useLectures();
  const [openModal, setOpenModal] = useState(false);
  const courseData = allLectures?.find(
    (item) => item?.courseId === router?.query?.courseId
  );

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <AdminLayout title="Add Lecture | Edu-Hub-Learning">
      <section className="w-full h-full space-y-10">
        <div className="flex flex-col gap-3">
          {/* <div className="flex items-center gap-4">
            <h1 className="text-5xl font-bold text-primary uppercase lg:pr-12 md:pr-4">
              {courseData?.courseName}
            </h1>
          </div>
          <h2 className="text-xl font-medium tracking-wider lg:pr-12 md:pr-4">
            {courseData.description}
          </h2> */}
          {/* <div className=" text-lg font-semibold mt-4 text-white ">
            <p className="inline-block bg-primary/80  px-2 rounded-lg">
              {courseData.name}
            </p>
          </div> */}
          {/* <h3 className="text-xl font-medium tracking-wider">
              {data?.data?.courseName?.Category?.description}
            </h3> */}
        </div>
        <div className="cursor-pointer flex md:justify-end flex-col md:flex-row gap-6 px-2">
          <button
            onClick={handleOpen}
            className="flex justify-between gap-2 px-8 py-3 bg-green-300 text-gray-900 rounded-md border border-gray-600  active:bg-green-800/50"
          >
            <Add />
            Add Lecture
          </button>
        </div>
        <div className="relative cursor-pointer">
          <div className="flex flex-col gap-6">
            {allLectures?.length === 0 ? (
              <div className="flex flex-col items-center justify-center">
                <p className="capitalize font-semibold text-xl flex items-center justify-center">
                  No Lectures Created Yet !
                </p>
              </div>
            ) : (
              allLectures?.map((item: any, index: number) => (
                <LectureCard
                  key={index}
                  lecture={item}
                  handleClose={() => setOpenModal(false)}
                  open={openModal}
                  setOpenModal={setOpenModal}
                  allLectures={allLectures}
                  updateLectures={updateLectures}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <LectureForm
        handleClose={() => setOpenModal(false)}
        open={openModal}
        allLectures={allLectures}
        updateLectures={updateLectures}
      />
    </AdminLayout>
  );
};

const LectureCard = ({ lecture, allLectures, updateLectures }: any) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [editLecture, setEditLecture] = useState(false);
  const { addOrUpdateLecture } = useCoursesAndLectures();

  const goToLectureDetails = () => {
    router.push(`/admin/manage-courses/course/lecture/${lecture?.id}`);
  };

  const handleDelete = async (ID: any) => {
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
          // logic of local remove for delete
          // Filter out the category to be deleted
          const updatedLecture = allLectures.filter(
            (EachCourse: any) => EachCourse.id !== ID
          );
          // Update state to trigger re-render
          updateLectures(updatedLecture);
          // Call addOrUpdateLecture to update courses state
          addOrUpdateLecture(router?.query?.courseId, {
            id: ID,
            courseId: router?.query?.courseId,
            // Other lecture properties
          });

          toast.success("Lecture deleted successfully...");
        }
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleEditOpen = () => {
    setEditLecture(true);
  };
  return (
    <>
      <div className="bg-white py-4 px-6 flex items-center gap-4 justify-between shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md border-t-4 border-primary cursor-pointer hover:-translate-y-3 duration-300">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-3xl font-bold text-gray-700">
              {lecture?.lectureTitle}
            </h1>
            <p className="text-lg font-medium text-gray-600 break-words">
              {lecture?.lectureDescription}
            </p>
            <p className="text-lg font-medium">lecture {10}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Tooltip title="view All" followCursor placement="top-start" arrow>
            <button
              className="w-8 h-8 grid place-items-center rounded-full border border-emerald-500 bg-emerald-500/10 text-emerald-500"
              onClick={goToLectureDetails}
            >
              <Preview />
            </button>
          </Tooltip>
          <Tooltip
            title="Edit Lecture"
            followCursor
            placement="top-start"
            arrow
          >
            <button
              className="w-8 h-8 grid place-items-center rounded-full border border-orange-600 bg-orange-500/10 text-orange-500"
              onClick={handleEditOpen}
            >
              <Edit />
            </button>
          </Tooltip>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Tooltip
              title="Delete Lecture"
              followCursor
              placement="top-start"
              arrow
            >
              <button
                disabled={isLoading}
                onClick={() => handleDelete(lecture?.id)}
                className="w-8 h-8 grid place-items-center rounded-full border border-red-900 bg-red-700/20 text-red-800"
              >
                <DeleteOutline />
              </button>
            </Tooltip>
          )}
        </div>
      </div>

      <LectureForm
        isEdit={true}
        handleClose={() => setEditLecture(false)}
        open={editLecture}
        data={lecture}
        allLectures={allLectures}
        updateLectures={updateLectures}
      />
    </>
  );
};

export default AllLectures;
