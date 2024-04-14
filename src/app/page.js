import AboutSection from "../components/AboutSection";
import EmailSection from "../components/EmailSection";
import IntroSection from "../components/IntroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <Navbar />
      <div className="container mx-auto py-4 px-12 mt-20">
        <IntroSection />
      </div>
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </main>
  );
}
