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
const ContentForm = ({
  open,
  isEdit,
  handleClose,
  data,
  allContents,
  updateContents,
}: any) => {
  const router = useRouter();
  const initialValues = {
    contentDescription: "",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: isEdit
      ? {
          contentDescription: data?.contentDescription,
        }
      : initialValues,
    validationSchema: yup.object({
      contentDescription: yup
        .string()
        .required("content is required")
        .min(20, "content must be at least 20 characters"),
    }),
    onSubmit: async (values: any, { resetForm }: any) => {
      try {
        let updatedContent;
        if (isEdit) {
          // Update existing content
          updatedContent = allContents.map((content: any) =>
            content.id === data?.id
              ? { ...content, ...values, lectureId: router?.query?.lectureId }
              : content
          );

          updateContents(updatedContent);
        } else {
          // Create new content
          const newContent = {
            id: new Date().getTime().toString(),
            lectureId: router?.query?.lectureId,
            ...values,
          };
          updatedContent = [...allContents, newContent];
          updateContents(updatedContent);
        }

        handleClose();
        resetForm();
      } catch (error) {
        console.error("Error updating contents:", error);
      }
    },
  });

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      <DialogTitle className="flex items-center justify-center">
        <p className="text-3xl font-bold py-2">
          {isEdit ? "Update Content" : "Add Content"}
        </p>
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="text-lg text-gray-600  col-span-12">
              Write Content
              <span className="ml-1 text-red-500"> *</span>
              <textarea
                name="contentDescription"
                placeholder="Write the content"
                value={formik.values.contentDescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full min-h-[10rem] max-h-full overflow-y-scroll p-2 text-sm col-span-12 mt-6 overflow-hidden border-b-2 border-gray-300 focus:border-primary"
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
                {isEdit ? "Update" : "Add Content"}
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
export default ContentForm;
