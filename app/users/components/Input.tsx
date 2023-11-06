"use client";
import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
type Props = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;
const Input = ({ name, ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const err = errors ? errors[name]?.message?.toString() : "";
  return (
    <div className="w-full">
      <input {...props} type="text" {...register(name)} />
      {<p className="w-full text-red-700 text-center">{err}</p>}
    </div>
  );
};

export default Input;
