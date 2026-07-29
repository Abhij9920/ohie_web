import React from 'react';
import Link from 'next/link';

export default function BestStudentCity() {
  return (
    <section className="w-full bg-[#FAFAF7] py-10 md:py-16 lg:py-24 px-4 md:px-8 xl:px-[100px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">

        {/* Left Column */}
        <div className="flex flex-col">
          <span className="text-[#2463A7] text-[12px] md:text-[14px] font-bold tracking-wider uppercase mb-3 block">
            Unrivaled Excellence
          </span>
          <h2 className="text-[#0B1F4A] text-[28px] md:text-[32px] mb-6 md:mb-8 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            The Best Student City in Australia
          </h2>

          <div className="text-[#555555] space-y-6 text-[14px] md:text-[16px] leading-relaxed">
            <p>
              Melbourne is the best student city in Australia and the third best student city in the world, according to the prestigious <Link href="#" className="underline hover:text-[#0B1F4A] transition-colors decoration-[#d1d5db] underline-offset-4">QS Best Student Cities 2018</Link>.
            </p>
            <p>
              Key features such as Victoria's high standard and quality of living, vibrant multicultural society and social inclusion attracted 200,000 international students to Victoria in 2017.
            </p>
            <p>
              Often called Australia's cultural capital, Melbourne is home to the attractions that make the Australian lifestyle so appealing. Melbourne's rank as the 10th best city in the world for 'employer activity' makes it an even more attractive destination.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col pt-4 lg:pt-6">
          {/* Fact 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center py-6 border-t sm:border-t-0 border-b border-[#E5E5E0] gap-4 sm:gap-12">
            <div className="sm:w-[180px] shrink-0">
              <h3 className="text-[#2463A7] text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                200,000+
              </h3>
            </div>
            <p className="text-[#0B1F4A] text-[14px] md:text-[15px] font-semibold">
              International students living in Victoria in 2017
            </p>
          </div>

          {/* Fact 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-[#E5E5E0] gap-4 sm:gap-12">
            <div className="sm:w-[180px] shrink-0">
              <h3 className="text-[#2463A7] text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                10th Best
              </h3>
            </div>
            <p className="text-[#0B1F4A] text-[14px] md:text-[15px] font-semibold">
              Global ranking for employer activity
            </p>
          </div>

          {/* Fact 3 */}
          <div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-[#E5E5E0] gap-4 sm:gap-12">
            <div className="sm:w-[180px] shrink-0">
              <h3 className="text-[#2463A7] text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                Cultural<br />Capital
              </h3>
            </div>
            <p className="text-[#0B1F4A] text-[14px] md:text-[15px] font-semibold">
              Australia's center of art, fashion, and food
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
