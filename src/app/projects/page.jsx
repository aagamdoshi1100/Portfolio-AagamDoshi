import React from "react";
import ProjectCard from "../../components/ProjectCard";
import connectDB from "@/utils/connectDB";
import projects from "@/models/projects";
import FadeIn from "@/components/Animations/FadeIn";

export const revalidate = 3600;

const Projects = async () => {
  await connectDB();
  const projectsRaw = await projects.find({}).lean();
  const projectsData = JSON.parse(JSON.stringify(projectsRaw));
  return (
    <section className="w-[90%] md:w-[85%] grid gap-8 md:gap-14 mx-auto py-4 my-20">
      {projectsData?.length > 0 &&
        projectsData?.map((pro, index) => (
          <FadeIn key={index}>
            <ProjectCard details={pro} />
          </FadeIn>
        ))}
    </section>
  );
};

export default Projects;
