import { ContentForm } from "@/components/forms";
import { useContents } from "@/hooks/useContents";
import { AdminLayout } from "@/layouts";
import { Add, DeleteOutline, Edit } from "@mui/icons-material";
import { CircularProgress, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const LectureContents = () => {
  const router = useRouter();
  const { allContents, updateContents } = useContents();
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <AdminLayout title="Add Lecture | Edu-Hub-Learning">
      <section className="w-full h-full space-y-10">
        <div className="flex flex-col gap-3"></div>
        <div className="cursor-pointer flex md:justify-end flex-col md:flex-row gap-6 px-2">
          <button
            onClick={handleOpen}
            className="flex justify-between gap-2 px-8 py-3 bg-orange-300 text-gray-900 rounded-md border border-gray-600  active:bg-green-800/50"
          >
            <Add />
            Add Content
          </button>
        </div>
        <div className="relative cursor-pointer">
          <div className="flex flex-col gap-6">
            {allContents?.length === 0 ? (
              <div className="flex flex-col items-center justify-center">
                <p className="capitalize font-semibold text-xl flex items-center justify-center">
                  No Content Created Yet In This Lecture.
                </p>
              </div>
            ) : (
              allContents?.map((item: any, index: number) => (
                <ContentCard
                  key={index}
                  content={item}
                  handleClose={() => setOpenModal(false)}
                  open={openModal}
                  setOpenModal={setOpenModal}
                  allContents={allContents}
                  updateContents={updateContents}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <ContentForm
        handleClose={() => setOpenModal(false)}
        open={openModal}
        allContents={allContents}
        updateContents={updateContents}
      />
    </AdminLayout>
  );
};

const ContentCard = ({ content, allContents, updateContents }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [editContent, setEditContent] = useState(false);
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
          const updatedContent = allContents?.filter(
            (EachContent: any) => EachContent?.id !== ID
          );
          // Update state to trigger re-render
          updateContents(updatedContent);
          toast.success("Content deleted successfully...");
        }
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleEditOpen = () => {
    setEditContent(true);
  };
  return (
    <>
      <div className="bg-white py-4 px-6 flex items-center gap-4 justify-between shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md border-t-4 border-orange-400 cursor-pointer hover:-translate-y-3 duration-300">
        <div className="flex flex-col gap-2">
          <p className="text-md font-medium text-gray-600 break-words">
            {content?.contentDescription}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Tooltip
            title="Edit Content"
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
              title="Delete Content"
              followCursor
              placement="top-start"
              arrow
            >
              <button
                disabled={isLoading}
                onClick={() => handleDelete(content?.id)}
                className="w-8 h-8 grid place-items-center rounded-full border border-red-900 bg-red-700/20 text-red-800"
              >
                <DeleteOutline />
              </button>
            </Tooltip>
          )}
        </div>
      </div>

      <ContentForm
        isEdit={true}
        handleClose={() => setEditContent(false)}
        open={editContent}
        data={content}
        allContents={allContents}
        updateContents={updateContents}
      />
    </>
  );
};

export default LectureContents;
