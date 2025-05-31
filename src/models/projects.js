import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  stack: [String],
  link: String,
  description: [String],
  Live: String,
  githubURL: String,
  Screenshot: String,
});

const projects =
  mongoose.models.projects || mongoose.model("projects", projectSchema);

export default projects;
