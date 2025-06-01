import mongoose from "mongoose";

const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log("Connected to database", mongoose.connection.name);
  } catch (error) {
    console.log("Failed to connect database", error);
  }
};
export default connectDB;
