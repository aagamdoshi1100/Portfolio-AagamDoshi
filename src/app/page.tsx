import IntroSection from "@/components/IntroSection";
import fetchData from "@/utils/fetchData";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default async function Home() {
  const aboutMeData = await fetchData("/api/aboutme");
  const experienceData = await fetchData("/api/experience");

  return (
    <main className="w-[90%] md:w-[85%] grid gap-20 mx-auto py-4 my-20">
      <IntroSection name={aboutMeData?.data?.[0]?.name ?? ""} />
      <About data={aboutMeData?.data ?? []} />
      <Experience data={experienceData?.data ?? []} />
      <Contact />
    </main>
  );
}
