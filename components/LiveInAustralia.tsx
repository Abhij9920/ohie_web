import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LiveInAustralia() {
  return (
    <section className="w-full bg-[#FAFAF7] py-10 md:py-16 lg:py-24 px-4 md:px-8 xl:px-[100px]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <span className="text-[#2463A7] text-[12px] md:text-[14px] font-bold tracking-wider uppercase mb-3">
            New Horizons
          </span>
          <h2 className="text-[#0B1F4A] text-[32px] md:text-[38px] lg:text-[44px] mb-4 md:mb-6 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Live in Australia
          </h2>

          <div className="text-[#555555] space-y-6 text-[15px] md:text-[15px] leading-relaxed mb-8">
            <p>
              Living in Australia will be a new experience, but there are support services in your institution as well as from other organisations to help make adjusting to life in Australia easier.
            </p>
            <p>
              Australia is among the happiest countries in the world (World Happiness Report 2017) and we have four of the 30 best cities in the world for students (QS Top University Rankings 2017), you are sure to enjoy your time here.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="https://www.studyinaustralia.gov.au/" target="_blank" rel="noopener noreferrer" className="bg-[#0B1F4A] hover:bg-[#152e6d] text-white text-[14px] font-semibold px-8 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Discover More Source
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative min-h-[250px] sm:min-h-[350px] lg:min-h-[450px]">
          <Image
            src="/study_mel/img1.png"
            alt="Students sitting on grass in Australia"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
