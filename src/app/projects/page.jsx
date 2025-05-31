import fetchData from "@/utils/fetchData";
import React from "react";
import ProjectCard from "../../components/ProjectCard";

const Projects = async () => {
  const projectData = await fetchData("/api/projects");
  return (
    <section className="w-[90%] md:w-[85%] grid gap-8 md:gap-14 mx-auto py-4 my-20">
      {projectData?.data?.length > 0 &&
        projectData?.data?.map((pro, index) => (
          <ProjectCard key={index} details={pro} />
        ))}
    </section>
  );
};

export default Projects;
