import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <main className="flex flex-col w-full">
        <Hero />
        <PopularCourses />
      </main>
    </div>
  );
}
