import { connectToMongoose } from "@/lib/mongoose/connectToMongoose";
import { userCollection } from "@/lib/mongoose/schema";
import { NextResponse } from "next/server";

(async () => await connectToMongoose())();
export const GET = async (_: unknown, res: NextResponse) => {
  const data = await userCollection.find();
  return NextResponse.json(
    {
      data,
    },
    { status: 200 }
  );
};
