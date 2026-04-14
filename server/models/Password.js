import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
  userId: String,
  title: String,
  username: String,
  password: String,
  category: String
});

export default mongoose.model("Password", passwordSchema);