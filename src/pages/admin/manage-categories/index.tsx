import { CategoryForm } from "@/components/forms";
import { useCategories } from "@/hooks/useCategory";
import AdminPanelLayout from "@/layouts/admin";
import { Add, Close, DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageCategory = () => {
  const { allCategories, updateCategories } = useCategories();
  return (
    <AdminPanelLayout title="Manage Category | Edu-Hub-Learning">
      <article className="">
        <section className="w-full">
          <h1 className="font-semibold text-2xl text-center t pb-8">
            All Categories
          </h1>
          <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            <AddCategoryButton
              updateCategories={updateCategories}
              allCategories={allCategories}
            />

            {allCategories?.map((item: any, index: number) => (
              <AdminCategoryCard
                key={index}
                item={item}
                updateCategories={updateCategories}
                allCategories={allCategories}
              />
            ))}
          </aside>
        </section>
      </article>
    </AdminPanelLayout>
  );
};

const AddCategoryButton = ({
  updateCategories,
  allCategories,
}: {
  updateCategories: any;
  allCategories: any;
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className="w-full h-32 flex items-center justify-center bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-xl cursor-pointer"
        onClick={handleClickOpen}
      >
        <Add className="text-5xl text-primary" />
        <h1 className="text-3xl text-primary font-bold">Add Category</h1>
      </div>

      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <h2 className="text-3xl font-bold py-4 text-center">Add Category</h2>

        <DialogContent>
          <div className="max-h-full overflow-hidden">
            <CategoryForm
              handleClose={handleClose}
              updateCategories={updateCategories}
              allCategories={allCategories}
            />
          </div>
        </DialogContent>
        <DialogActions className="absolute top-2 right-5">
          <Close
            onClick={handleClose}
            className="text-red-600 cursor-pointer"
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

const AdminCategoryCard = ({
  item,
  updateCategories,
  allCategories,
}: {
  item: any;
  updateCategories: any;
  allCategories: any;
}) => {
  const handleRemoveCategory = async (ID: string) => {
    try {
      Swal.fire({
        title: "Warning",
        text: "Are you sure you want to delete",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#10b981",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No cancel",
      }).then(async (result: any) => {
        if (result?.isConfirmed) {
          // Filter out the category to be deleted
          const updatedCategory = allCategories.filter(
            (category: any) => category.id !== ID
          );
          updateCategories(updatedCategory);
          toast.success("category deleted successfully...");
        }
      });
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <article
      key={item?.id}
      className="group relative w-full flex items-center justify-between gap-4 bg-white rounded-xl overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
    >
      <div className="flex justify-center items-center w-full">
        <p className="lg:text-xl font-bold text-primary hover:text-blue-500 hover:underline">
          {item?.categoryName}
        </p>
      </div>

      <div className="absolute top-2 right-2 flex-col gap-5  text-primary hidden group-hover:block">
        <EditCategoryButton
          id={item.id}
          allCategories={allCategories}
          updateCategories={updateCategories}
        />

        <button
          className="w-8 h-8 grid place-items-center rounded-full border border-red-500 bg-red-500/10 text-red-500"
          onClick={() => handleRemoveCategory(item?.id)}
        >
          <DeleteOutline fontSize="small" />
        </button>
      </div>
    </article>
  );
};

const EditCategoryButton = ({
  id,
  updateCategories,
  allCategories,
}: {
  id: string;
  updateCategories: any;
  allCategories: any;
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        className="w-8 h-8 grid place-items-center mb-2 rounded-full border border-blue-500 bg-blue-500/10 text-blue-500"
        onClick={handleClickOpen}
      >
        <EditOutlined fontSize="small" />
      </button>

      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <h2 className="text-3xl font-bold py-4 text-center text-secondary">
          Edit Category
        </h2>

        <DialogContent>
          <div className="max-h-full overflow-hidden">
            <CategoryForm
              isEdit
              handleClose={handleClose}
              id={id}
              updateCategories={updateCategories}
              allCategories={allCategories}
            />
          </div>
        </DialogContent>
        <DialogActions className="absolute top-2 right-5">
          <Close
            onClick={handleClose}
            className="text-red-600 cursor-pointer"
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ManageCategory;
