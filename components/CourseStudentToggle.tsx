"use client"
import React, { useState } from 'react';

interface CourseStudentToggleProps {
  title?: string;
  option1Text?: string;
  option2Text?: string;
  helperText?: string;
}

export default function CourseStudentToggle({
  title = "I am a...",
  option1Text = "Domestic Student",
  option2Text = "International Student",
  helperText = "Select your student type to view relevant fees, entry requirements and support services",
}: CourseStudentToggleProps) {
  const [studentType, setStudentType] = useState<'domestic' | 'international'>('domestic');

  const activeClass = "bg-[#0A1A44] text-white";
  const inactiveClass = "bg-white text-[#0A1A44] hover:bg-gray-50";

  return (
    <section className="w-full bg-[#F8F9FA] py-10 flex flex-col items-center justify-center">
      <h2
        className="text-[32px] md:text-[40px] text-[#0A1A44] italic mb-8"
        style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '110%' }}
      >
        {title}
      </h2>

      <div className="flex mb-4 gap-4">
        <button
          className={`px-8 py-3.5 flex items-center gap-3 text-[15px] font-medium transition-colors border border-[#0A1A44] ${studentType === 'domestic' ? activeClass : inactiveClass}`}
          onClick={() => setStudentType('domestic')}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3325 8.33121V13.3318M5.00022 10.4148V13.3318C5.00022 13.9949 5.52696 14.6309 6.46457 15.0997C7.40218 15.5686 8.67385 15.8321 9.99982 15.8321C11.3258 15.8321 12.5975 15.5686 13.5351 15.0997C14.4727 14.6309 14.9994 13.9949 14.9994 13.3318V10.4148M17.849 9.09992C17.9982 9.0341 18.1248 8.92596 18.2131 8.78889C18.3014 8.65182 18.3476 8.49185 18.3459 8.32878C18.3442 8.16572 18.2948 8.00674 18.2036 7.87152C18.1125 7.73631 17.9837 7.6308 17.8332 7.56808L10.6913 4.31438C10.4741 4.21532 10.2383 4.16406 9.99965 4.16406C9.76102 4.16406 9.52516 4.21532 9.30804 4.31438L2.16695 7.56475C2.0186 7.62973 1.8924 7.73655 1.80378 7.87213C1.71516 8.00771 1.66797 8.16619 1.66797 8.32817C1.66797 8.49015 1.71516 8.64863 1.80378 8.78421C1.8924 8.91979 2.0186 9.02661 2.16695 9.09159L9.30804 12.3486C9.52516 12.4477 9.76102 12.4989 9.99965 12.4989C10.2383 12.4989 10.4741 12.4477 10.6913 12.3486L17.849 9.09992Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>

          {option1Text}
        </button>
        <button
          className={`px-8 py-3.5 flex items-center gap-3 text-[15px] font-medium transition-colors border-2 border-[#0A1A44] ${studentType === 'international' ? activeClass : inactiveClass}`}
          onClick={() => setStudentType('international')}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.334 9.99806C18.334 14.6008 14.6028 18.3321 10 18.3321M18.334 9.99806C18.334 5.39532 14.6028 1.66406 10 1.66406M18.334 9.99806H1.66602M10 18.3321C5.39727 18.3321 1.66602 14.6008 1.66602 9.99806M10 18.3321C7.86004 16.0851 6.66642 13.101 6.66642 9.99806C6.66642 6.8951 7.86004 3.91104 10 1.66406M10 18.3321C12.14 16.0851 13.3336 13.101 13.3336 9.99806C13.3336 6.8951 12.14 3.91104 10 1.66406M10 1.66406C5.39727 1.66406 1.66602 5.39532 1.66602 9.99806" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>

          {option2Text}
        </button>
      </div>

      <p className="text-[#999999] text-[12px] mt-[13px] text-center">
        {helperText}
      </p>
    </section>
  );
}
