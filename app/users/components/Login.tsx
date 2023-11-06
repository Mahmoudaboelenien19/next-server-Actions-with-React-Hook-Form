"use client";
import React from "react";

import { FieldValues, FormProvider, useForm } from "react-hook-form";
// import Users from "./components/Users";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Submit from "./Submit";
import { AddTodo } from "@/app/actions";
import Input from "./Input";
import { toast } from "sonner";

const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "email",
  },
  {
    name: "age",
    type: "number",
    placeholder: "age",
  },
];
const Login = () => {
  const schema = yup.object().shape({
    name: yup.string().min(5, "add at least 5").required("name is required"),
    age: yup
      .number()
      .typeError("age must be a number")
      .min(18, "you should be  18 or older")
      .required("age is required"),
    email: yup.string().min(4).required("email is required"),
  });
  const methods = useForm({ resolver: yupResolver(schema) });
  const { handleSubmit, reset } = methods;
  const onSubmit = async (data: FieldValues) => {
    const res = await AddTodo(data);
    if (res?.status === 200) {
      reset();
      toast.success("user added successfully");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col  gap-8 w-72"
      >
        {inputs.map(({ name, placeholder, type }, i) => {
          return (
            <Input
              key={i}
              type={type}
              name={name}
              placeholder={placeholder}
              className="h-10  w-full text-black border-red-300"
            />
          );
        })}
        <Submit />
      </form>
    </FormProvider>
  );
};

export default Login;
