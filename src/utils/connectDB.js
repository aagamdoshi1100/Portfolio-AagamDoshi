import mongoose from "mongoose";
const MongoURI = process.env.Mongo_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MongoURI, {});
    console.log("Connected to database", mongoose.connection.name);
  } catch (error) {
    console.log("Failed to connect database", error);
  }
};
module.exports = connectDB;
