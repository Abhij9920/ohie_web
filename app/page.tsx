import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import Testimonials from "@/components/Testimonials";
import NewsEvents from "@/components/NewsEvents";
import CallToAction from "@/components/CallToAction";
import Accreditations from "@/components/Accreditations";
import CourseBanner from "@/components/CourseBanner";
import WhyOihe from "@/components/WhyOihe";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <main className="flex flex-col w-full">
        <Hero />
        <PopularCourses />
        <WhyOihe />
        <CourseBanner />

        <Testimonials />
        <CallToAction />

        <NewsEvents />
        <Accreditations />

      </main>
    </div>
  );
}
