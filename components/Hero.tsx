import Image from "next/image";
import Link from "next/link";

const marqueeItems = [
  "TEQSA REGISTERED",
  "CRICOS PROVIDER",
  "AUSTRALIAN GOVERNMENT RECOGNISED",
  "MELBOURNE CBD CAMPUS",
  "CAREER-READY GRADUATES"
];

const Dot = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.07069 -0.00352633V7.06755H-0.000379916V-0.00352633H7.07069Z" fill="#2463A7"/>
  </svg>
);

export default function Hero() {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.png"
          alt="Ozford Campus Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 text-center max-w-[1100px] mx-auto mt-3">

        {/* Main Heading */}
        <h1 className="text-white text-[40px] md:text-[56px] lg:text-[72px] font-normal font-[family-name:var(--font-dm-serif)] leading-[1.1] mb-[16px]">
          Shape Your Future at Ozford Institute of Higher Education
        </h1>

        {/* Sub Heading */}
        <p className="text-white text-[16px] md:text-[18px] lg:text-[22px] font-normal font-sans mb-10 max-w-4xl">
          World-class education, professionally recognised <br className="hidden sm:block" /> qualifications, and a launchpad for your career.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[24px] w-full sm:w-auto">
          <Link
            href="#"
            className="bg-[#2463A7] bg-opacity-[0.65] rounded-sm hover:bg-opacity-100 text-white text-[14px] sm:text-[16px] font-medium px-[24px] py-[12px] sm:px-[40px] sm:py-[14px] transition-all duration-300 w-full sm:w-auto text-center"
          >
            Explore Courses
          </Link>
          <Link
            href="#"
            className="bg-transparent border border-white hover:bg-white/10 text-white text-[14px] sm:text-[16px] font-medium px-[24px] py-[12px] sm:px-[40px] sm:py-[14px] transition-all duration-300 w-full sm:w-auto text-center"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Moving Marquee Banner */}
      <style>{`
        @keyframes custom-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="absolute bottom-0 left-0 w-full bg-[#0B1F4A] overflow-hidden py-[16px] z-20">
        <div className="flex w-fit" style={{ animation: 'custom-marquee 25s linear infinite' }}>
          <div className="flex items-center gap-[40px] pr-[40px]">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-[40px]">
                <span className="text-[13px] font-sans text-white uppercase whitespace-nowrap">{item}</span>
                <Dot />
              </div>
            ))}
          </div>
          {/* Duplicate for infinite effect */}
          <div className="flex items-center gap-[40px] pr-[40px]">
            {marqueeItems.map((item, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-[40px]">
                <span className="text-[13px] font-sans text-white uppercase whitespace-nowrap">{item}</span>
                <Dot />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
