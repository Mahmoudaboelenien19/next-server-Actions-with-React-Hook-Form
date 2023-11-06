import { getUsers } from "@/lib/getUsers";
import React from "react";
type User = {
  name: string;
  age: number;
  email: string;
};
const UsersData = async () => {
  const users = await getUsers();
  console.log({ users });
  return (
    <div>
      {users?.data?.map(({ name, age, email }: User, i: number) => {
        return (
          <div key={i} className="">
            <div>
              <span className="opacity-50"> name :</span>
              <span className="font-bold ">{name}</span>
            </div>
            <div>
              <span className="opacity-50"> age :</span>{" "}
              <span className="font-bold ">{age}</span>
            </div>
            <div>
              <span className="opacity-50"> email :</span>{" "}
              <span className="font-bold ">{email}</span>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default UsersData;
