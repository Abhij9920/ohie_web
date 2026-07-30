import React from 'react';
import Image from 'next/image';

const SmileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_6342_9071)">
      <path d="M8.00048 14.001C8.00048 14.001 9.5006 16.0011 12.0008 16.0011C14.501 16.0011 16.0011 14.001 16.0011 14.001M9.00056 9.00056H9.01056M15.001 9.00056H15.011M22.0016 12.0008C22.0016 17.5241 17.5241 22.0016 12.0008 22.0016C6.47751 22.0016 2 17.5241 2 12.0008C2 6.47751 6.47751 2 12.0008 2C17.5241 2 22.0016 6.47751 22.0016 12.0008Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="clip0_6342_9071">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const CoffeeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2V4M14 2V4M16 8C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9V17C17 18.0609 16.5786 19.0783 15.8284 19.8284C15.0783 20.5786 14.0609 21 13 21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H18C19.0609 8 20.0783 8.42143 20.8284 9.17157C21.5786 9.92172 22 10.9391 22 12C22 13.0609 21.5786 14.0783 20.8284 14.8284C20.0783 15.5786 19.0609 16 18 16H17M6 2V4" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const PeopleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0011 21V19C16.0011 17.9391 15.5797 16.9217 14.8295 16.1716C14.0792 15.4214 13.0618 15 12.0008 15H6.00032C4.93937 15 3.92187 15.4214 3.17167 16.1716C2.42146 16.9217 2 17.9391 2 19V21M16.0011 3.12793C16.8589 3.3503 17.6186 3.85119 18.161 4.55199C18.7033 5.25279 18.9976 6.11382 18.9976 6.99993C18.9976 7.88604 18.7033 8.74707 18.161 9.44787C17.6186 10.1487 16.0011 10.8719M22.0016 20.9999V18.9999C22.0009 18.1136 21.7059 17.2527 21.1629 16.5522C20.6199 15.8517 19.8596 15.3515 19.0014 15.1299M13.0009 7C13.0009 9.20914 11.2099 11 9.00056 11C6.79124 11 5.00024 9.20914 5.00024 7C5.00024 4.79086 6.79124 3 9.00056 3C11.2099 3 13.0009 4.79086 13.0009 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function WhyStudyInMelbourne() {
  return (
    <section className="w-full bg-white py-10 md:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px]">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-12 mb-10 md:mb-16 lg:mb-24">
          <div className="flex-1 w-full lg:w-auto">
            <span className="text-[#FFFFFF] text-[12px] md:text-[14px] font-bold tracking-wider uppercase mb-3 block">
              Academic Heartland
            </span>
            <h2 className="text-white text-[32px] md:text-[38px] lg:text-[44px] leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Why Study in Melbourne
            </h2>
          </div>
          <div className="flex-1 w-full lg:w-auto lg:max-w-[500px]">
            <p className="text-[#FFFFFF]/80 text-[14px] md:text-[15px] leading-relaxed">
              Discover Victoria's educational engine. Melbourne uniquely fuses professional training opportunities with a lifestyle regularly considered the highest standard in the Southern Hemisphere.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-16 lg:mb-24">
          {/* 1 */}
          <div>
            <div className="w-[50px] h-[50px] bg-white/10 flex items-center justify-center mb-6">
              <SmileIcon />
            </div>
            <h3 className="text-white text-[20px] md:text-[24px] mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>Most Liveable City</h3>
            <p className="text-[#FFFFFF]/80 text-[14px] md:text-[15px] leading-relaxed">Renowned for its unparalleled stability, robust healthcare infrastructure, rich culture, pristine environments, and world-leading educational resources.</p>
          </div>

          {/* 2 */}
          <div>
            <div className="w-[50px] h-[50px] bg-white/10 flex items-center justify-center mb-6">
              <CoffeeIcon />
            </div>
            <h3 className="text-white text-[20px] md:text-[24px] mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>Food & Culture Capital</h3>
            <p className="text-[#FFFFFF]/80 text-[14px] md:text-[15px] leading-relaxed">Lose yourself in legendary laneway espresso cafes, historic theaters, spectacular botanical parks, and the beautiful, winding pathways of the Yarra River.</p>
          </div>

          {/* 3 */}
          <div>
            <div className="w-[50px] h-[50px] bg-white/10 flex items-center justify-center mb-6">
              <PeopleIcon />
            </div>
            <h3 className="text-white text-[20px] md:text-[24px] mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>Student-Friendly City</h3>
            <p className="text-[#FFFFFF]/80 text-[14px] md:text-[15px] leading-relaxed">Navigate easily using a integrated free CBD public transport zone, thriving with over 55% international student representation in the vibrant central core.</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full relative min-h-[250px] md:min-h-[400px] lg:min-h-[600px]">
          <Image src="/study_mel/melbourne_skyline.png" alt="Melbourne Skyline" fill className="object-cover" sizes="100vw" quality={100} priority />
        </div>
      </div>
    </section>
  );
}
