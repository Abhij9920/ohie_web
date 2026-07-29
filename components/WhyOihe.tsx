import Image from "next/image";
import Link from "next/link";

export default function WhyOihe() {
  return (
    <section className="w-full bg-white relative pt-[60px] pb-[120px] md:pt-[90px] md:pb-[160px] lg:pb-48 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] relative z-10">

        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-start lg:-ml-4 xl:-ml-12 mb-1 lg:mb-0 z-10">
          <Image
            src="/why_ohie/why_ohie_2.png"
            alt="OIHE Campus"
            width={800}
            height={800}
            className="w-[110%] max-w-none h-auto object-contain -translate-x-4 md:-translate-x-8 lg:w-full lg:max-w-full lg:translate-x-0"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 lg:pl-16 xl:pl-24 flex flex-col pt-8 lg:pt-8">

          {/* Subtitle */}
          <span className="text-[#3b71b8] text-[12px] font-bold tracking-widest uppercase mb-4">
            WHY OIHE
          </span>

          {/* Heading */}
          <h2 className="text-[#102a5e] text-[28px] md:text-[32px] lg:text-[44px] font-[family-name:var(--font-dm-serif)] leading-[1.15] mb-8 italic">
            An Education Built for the <br className="hidden lg:block" /> Real World.
          </h2>

          {/* Paragraphs */}
          <p className="text-[#4B5563] text-[13px] md:text-[15px] leading-relaxed mb-6 font-medium">
            We provide our students with the skills, confidence and theoretical
            knowledge required to thrive in a global marketplace.
          </p>
          <p className="text-[#4B5563] text-[13px] md:text-[15px] font-medium leading-relaxed mb-10">
            Our Melbourne campus is situated in the heart of the business district,
            providing direct access to industry partners and professional networking
            opportunities.
          </p>

          {/* Feature List */}
          <div className="flex flex-col gap-8 md:gap-4 mb-12">
            {/* Feature 1 */}
            <div className="flex flex-col relative pl-5">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#3b71b8]"></div>
              <h4 className="text-[#0B1F4A] font-bold text-[14px] mb-1">
                Industry-Aligned Curriculum
              </h4>
              <p className="text-[#6B7280] text-[13px]">
                Courses designed in consultation with industry leaders.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col relative pl-5">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#3b71b8]"></div>
              <h4 className="text-[#0B1F4A] font-bold text-[14px] mb-1">
                Expert Academic Faculty
              </h4>
              <p className="text-[#6B7280] text-[13px]">
                Lecturers with real-world professional experience.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col relative pl-5">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#3b71b8]"></div>
              <h4 className="text-[#0B1F4A] font-bold text-[14px] mb-1">
                Flexible Study Options
              </h4>
              <p className="text-[#6B7280] text-[13px]">
                Blended learning models to suit your schedule.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col relative pl-5">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#3b71b8]"></div>
              <h4 className="text-[#0B1F4A] font-bold text-[14px] mb-1">
                Graduate Employment Focus
              </h4>
              <p className="text-[#6B7280] text-[13px]">
                Dedicated career services and placement support.
              </p>
            </div>
          </div>

          {/* Link */}
          <Link
            href="/admission-entry/why-oihe"
            className="text-[#102a5e] font-bold text-[16px] hover:text-[#3b71b8] transition-colors flex items-center gap-2 group w-fit pb-1"
          >
            <span className="border-b-2 border-[#102a5e] group-hover:border-[#3b71b8] transition-colors">
              Learn More About OIHE
            </span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>

      {/* Graduation Hands Image (Positioned at bottom of section) */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none flex justify-center overflow-hidden">
        <div className="w-full max-w-[1440px] relative flex justify-center lg:justify-start">
          <Image
            src="/why_ohie/why_ohie_1.png"
            alt="Graduation Celebration"
            width={1440}
            height={500}
            className="w-full h-auto object-contain object-left-bottom translate-x-[20%] md:translate-x-[25%] lg:translate-x-0 ml-0 lg:-ml-12"
          />
        </div>
      </div>
    </section>
  );
}
