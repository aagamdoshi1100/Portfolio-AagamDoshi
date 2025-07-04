import IntroSection from "@/components/IntroSection";
import About from "@/components/About";
import Aboutme from "@/models/aboutme";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import connectDB from "@/utils/connectDB";
import experiences from "@/models/experiences";
import FadeIn from "@/components/Animations/FadeIn";
export const revalidate = 3600;

export default async function Home() {
  await connectDB();
  const aboutMeRaw = await Aboutme.find({}).lean();
  const experienceRaw = await experiences.find({}).lean();
  const aboutMeData = JSON.parse(JSON.stringify(aboutMeRaw));
  const experienceData = JSON.parse(JSON.stringify(experienceRaw));
  return (
    <main className="w-[90%] md:w-[85%] grid gap-20 mx-auto py-4 my-20">
      <FadeIn>
        <IntroSection name={aboutMeData?.[0]?.name ?? ""} />
      </FadeIn>

      <FadeIn>
        <About data={aboutMeData ?? []} />
      </FadeIn>

      <FadeIn>
        <Experience data={experienceData ?? []} />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>
    </main>
  );
}
