import React from 'react';
import Link from 'next/link';

export default function CareerHubHero() {
  return (
    <section className="relative w-full min-h-[300px] lg:min-h-[400px] flex">
      {/* Background split for full bleed */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full bg-[#0B1F4A]"></div>
        <div className="w-full lg:w-1/2 h-full relative hidden lg:block">
          {/* We use an img tag with object-cover to match the layout. The user should replace the src with their actual image path */}
          <img
            src="/carrer/carrer_bg.png"
            alt="Career Hub meeting in office"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Foreground Content Container - Aligned with the rest of the site */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] flex flex-col lg:flex-row">
        
        {/* Left Column (Content) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-[60px] md:py-[80px] lg:pr-[40px] xl:pr-[80px]">

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[12px] font-normal text-[#4D97E6]/70 capitalize tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/student-life" className="hover:text-white transition-colors">
              Student Life
            </Link>
            <span>/</span>
            <span className="text-[#4D97E6] font-semibold">Career Hub</span>
          </div>

          {/* Title */}
          <h1 className="text-white text-[48px] md:text-[60px] italic mb-4 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Career Hub
          </h1>

          {/* Blue underline */}
          <div className="w-[80px] md:w-[120px] h-[3px] bg-[#4D97E6] mb-6"></div>

          {/* Subtitle */}
          <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-[500px] mb-8">
            Your gateway to career success, industry connections and professional development.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#explore"
              className="bg-[#4D97E6] text-white px-6 md:px-8 py-3 text-[14px] font-semibold hover:bg-[#3d7bc2] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center gap-2 text-center"
            >
              Explore Opportunities
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
              </svg>
            </Link>
            <Link
              href="#coach"
              className="bg-transparent border border-white text-white px-6 md:px-8 py-3 text-[14px] font-semibold hover:bg-white/10 transition-colors inline-block text-center"
            >
              Meet Your Career Coach
            </Link>
          </div>
        </div>

        {/* Mobile Image (Visible only on small screens below content) */}
        <div className="w-full h-[300px] relative lg:hidden mt-auto">
          {/* We use an img tag with object-cover to match the layout. The user should replace the src with their actual image path */}
          <img
            src="/carrer/carrer_bg.png"
            alt="Career Hub meeting in office"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
}
