import React from 'react';
import Link from 'next/link';

export default function PhilosophyIntro() {
  return (
    <section className="w-full bg-[#FAFAF7] py-[60px] md:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">

          {/* Left Text */}
          <div className="flex-1 lg:max-w-[65%]">
            <h3 className="text-[#1C1C1C] text-[20px] md:text-[22px] lg:text-[22px] italic leading-[1.5] mb-6 font-normal">
              Ozford is committed to providing quality educational programs for students to achieve their educational and personal goals and embrace lifelong learning.
            </h3>
            <p className="text-[#5C645F] text-[14px] md:text-[16px] leading-[1.6]">
              Ozford fosters a personalised environment where students can develop skills and values to enable them to participate effectively in their chosen career field and the wider community.
            </p>
          </div>

          {/* Right Button */}
          <div className="flex justify-center md:justify-start">
            <Link href="/student-life/how-to-apply" className="inline-flex items-center justify-center bg-[#4D97E6] text-white font-semibold text-[15px] px-10 py-4 hover:bg-[#3B7BBF] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              Apply Now
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
