import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useCategories } from "@/hooks/useCategory";
import * as yup from "yup";

const CategoryForm = ({
  isEdit,
  handleClose,
  id,
  allCategories,
  updateCategories,
}: any) => {
  const initialValues = {
    categoryName: "",
  };

  const formik = useFormik({
    initialValues: isEdit
      ? {
          categoryName:
            allCategories?.find((category: any) => category.id === id)
              ?.categoryName || "",
        }
      : initialValues,
    validationSchema: yup.object({
      categoryName: yup
        .string()
        .required("Category name is required")
        .min(3, "Category name must be at least 3 characters")
        .max(50, "Category name cannot exceed 50 characters"),
    }),
    onSubmit: async (values) => {
      try {
        let updatedCategories;

        if (isEdit) {
          // Update existing category
          updatedCategories = allCategories.map((category: any) =>
            category.id === id ? { ...category, ...values } : category
          );
        } else {
          // Create new category
          const newCategory = {
            id: new Date().getTime().toString(),
            ...values,
          };
          updatedCategories = [...allCategories, newCategory];
        }
        // Update state to trigger re-render
        updateCategories(updatedCategories);
        handleClose();
      } catch (error) {
        console.error("Error updating categories:", error);
      }
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="text-lg text-gray-600  col-span-12">
          Category
          <span className="ml-1 text-red-500"> *</span>
          <input
            type="text"
            name="categoryName"
            placeholder="Enter category name"
            value={formik.values.categoryName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full col-span-12 mt-6 overflow-hidden border-b-2 border-gray-300 focus:outline-none focus:border-primary"
          />
        </div>

        {formik.touched.categoryName &&
          formik.errors.categoryName &&
          typeof formik.errors.categoryName === "string" && (
            <div className="text-sm text-red-500 mt-1">
              {formik.errors.categoryName}
            </div>
          )}

        <div className="w-full flex items-center justify-center mt-6">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className={`bg-primary/90 px-8 py-3 text-xl font-bold text-gray-100 hover:bg-primary duration-300 rounded-md ${
              formik.isSubmitting ? "opacity-50" : "opacity-100"
            }`}
          >
            {isEdit ? "Update" : "Add Category"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
