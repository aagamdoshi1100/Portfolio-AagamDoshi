import IntroSection from "@/components/IntroSection";
import fetchData from "@/utils/fetchData";
import About from "@/components/About";

export default async function Home() {
  const aboutMeData = await fetchData("/api/aboutme");

  return (
    <main className="w-[90%] md:w-[85%] grid gap-20 mx-auto py-4 mt-20">
      <IntroSection name={aboutMeData?.data?.[0]?.name ?? ""} />
      <About data={aboutMeData?.data ?? []} />
    </main>
  );
}
