import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import Testimonials from "@/components/Testimonials";
import NewsEvents from "@/components/NewsEvents";
import CallToAction from "@/components/CallToAction";
import Accreditations from "@/components/Accreditations";
import CourseBanner from "@/components/CourseBanner";
import WhyOihe from "@/components/WhyOihe";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <main className="flex flex-col w-full">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        
        <ScrollReveal>
          <PopularCourses />
        </ScrollReveal>

        <ScrollReveal>
          <WhyOihe />
        </ScrollReveal>

        <ScrollReveal>
          <CourseBanner />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <CallToAction />
        </ScrollReveal>

        <ScrollReveal>
          <NewsEvents />
        </ScrollReveal>

        <ScrollReveal>
          <Accreditations />
        </ScrollReveal>
      </main>
    </div>
  );
}
