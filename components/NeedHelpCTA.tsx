import React from 'react';
import Link from 'next/link';

export default function NeedHelpCTA() {
  return (
    <section className="w-full bg-[#2463A7] py-[50px] md:py-[60px] flex justify-center items-center">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-8 xl:px-[100px]">
        {/* Left Side */}
        <div className="text-white text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-[36px] md:text-[40px] font-serif italic mb-2 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Need Help?
          </h2>
          <p className="text-[16px] font-light">
            Our student support team is here for you
          </p>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact-us"
            className="bg-white text-[#275F97] px-8 py-3 text-[14px] font-semibold hover:bg-gray-100 transition-colors text-center"
          >
            Contact Us
          </Link>
          <Link
            href="mailto:studentservices@ozfordinstituteofhighereducation.edu.au"
            className="bg-transparent border border-white text-white px-8 py-3 text-[14px] font-semibold hover:bg-white/10 transition-colors text-center"
          >
            Email Student Services
          </Link>
        </div>
      </div>
    </section>
  );
}
