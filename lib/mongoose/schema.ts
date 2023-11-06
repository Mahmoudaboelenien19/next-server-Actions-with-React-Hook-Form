import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  age: String,
  email: String,
});

console.log("schema is successfully working");
export const userCollection =
  mongoose.models.users || mongoose.model("users", userSchema);
