import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import NewsEvents from "@/components/NewsEvents";
import CallToAction from "@/components/CallToAction";
import Accreditations from "@/components/Accreditations";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <main className="flex flex-col w-full">
        <Hero />
        <PopularCourses />
        <CallToAction />
        <NewsEvents />
        <Accreditations />
      </main>
    </div>
  );
}
