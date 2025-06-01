import IntroSection from "@/components/IntroSection";
import About from "@/components/About";
import Aboutme from "@/models/aboutme";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import connectDB from "@/utils/connectDB";
import experiences from "@/models/experiences";

export const revalidate = 3600;

export default async function Home() {
  await connectDB();
  const aboutMeRaw = await Aboutme.find({}).lean();
  const experienceRaw = await experiences.find({}).lean();
  const aboutMeData = JSON.parse(JSON.stringify(aboutMeRaw));
  const experienceData = JSON.parse(JSON.stringify(experienceRaw));
  return (
    <main className="w-[90%] md:w-[85%] grid gap-14 md:gap-20 mx-auto py-4 my-20">
      <IntroSection name={aboutMeData?.[0]?.name ?? ""} />
      <About data={aboutMeData ?? []} />
      <Experience data={experienceData ?? []} />
      <Contact />
    </main>
  );
}
