import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  company: String,
  companyLogo: String,
  role: String,
  duration: String,
  technologies: [String],
  responsibilities: [String],
  projects: [{ name: String, link: String, description: String }],
  JobNo: Number,
  companyLogo: String,
});

const experiences =
  mongoose.models.experiences ||
  mongoose.model("experiences", ExperienceSchema);

export default experiences;
