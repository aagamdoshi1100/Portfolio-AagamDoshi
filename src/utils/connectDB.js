const mongoose = require("mongoose");
const MongoURI = process.env.Mongo_URI;

const connectDB = async () => {
  try {
    const response = await mongoose.connect(MongoURI, {});
    console.log("Connected to database", mongoose.connection.name);
  } catch (error) {
    console.log("Failed to connect database", error);
  }
};
module.exports = connectDB;
