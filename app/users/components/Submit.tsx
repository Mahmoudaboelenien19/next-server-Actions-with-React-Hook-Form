"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { useFormContext } from "react-hook-form";
const Submit = () => {
  const { pending } = useFormStatus();
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <button type="submit" className="w-full bg-red-300 h-10 p-2">
      {isSubmitting ? "creating ..." : "submit"}
    </button>
  );
};

export default Submit;
