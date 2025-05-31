import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  phone: String,
  email: String,
  linkedin: String,
  github: String,
  portfolio: String,
});

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  year: String,
});

const stackSchema = new mongoose.Schema({
  name: String,
  src: String,
  alt: String,
  width: Number,
  height: Number,
  category: String,
});

const aboutmeSchema = new mongoose.Schema({
  name: String,
  contact: contactSchema,
  summary: String,
  education: [educationSchema],
  knownStack: [stackSchema],
});

const Aboutme =
  mongoose.models.AboutMe ||
  mongoose.model("AboutMe", aboutmeSchema, "AboutMe");

export default Aboutme;
