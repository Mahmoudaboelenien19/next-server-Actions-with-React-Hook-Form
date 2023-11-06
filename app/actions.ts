"use server";
import { connectToMongoose } from "@/lib/mongoose/connectToMongoose";
import { userCollection } from "@/lib/mongoose/schema";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
export const AddTodo = async (data: any) => {
  await connectToMongoose();
  console.log(data);
  //this if u send formData
  //   const { name, age, email } = Object.fromEntries(data);

  const user = await userCollection.create(data);
  revalidatePath("/api/users");

  return {
    status: 200,
  };
};
