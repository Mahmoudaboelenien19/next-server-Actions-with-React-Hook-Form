import React from "react";
import UsersData from "./components/Users";
import Login from "./components/Login";
export const dynamic = "force-dynamic";
const Page = () => {
  return (
    <div className=" py-20  px-0  m-0 box-border  w-fit min-h-screen flex justify-center items-center flex-col">
      <Login />
      <br />
      <br />
      <UsersData />
    </div>
  );
};

export default Page;
