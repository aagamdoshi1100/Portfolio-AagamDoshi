"use client";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "MERN-based Street Ecommerce App",
    description:
      "This project involves building a comprehensive e-commerce platform with user management (account creation, authentication), product management (addition and retrieval), cart and wishlist functionality, order creation and history retrieval, and address management for users.",
    image: "/street.jpg",
    gitUrl: "https://github.com/aagamdoshi1100",
    previewUrl: "https://street-ecom.netlify.app/",
  },
  {
    id: 2,
    title: "MERN-based Connectify Social Network",
    description:
      "This project involves a social media platform with key features including User Feed, User Profile, Follow/Unfollow, chat functionality and an Bookmark Feed.",
    image: "/connectify.jpg",
    gitUrl: "https://github.com/aagamdoshi1100",
    previewUrl: "https://connectify-react-app.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul className="grid md:grid-cols-2 gap-8 md:gap-6 md:mx-6 lg:gap-10 lg:mx-14">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
