import React from 'react';
import Link from 'next/link';

interface CourseCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CourseCTA({
  title = "Ready to Begin Your MIT Journey?",
  description = "Join our diverse global community of innovators and leaders. Applications are now open for the next intake in Melbourne.",
  primaryButtonText = "Apply Now",
  primaryButtonLink = "#",
  secondaryButtonText = "Download Prospectus",
  secondaryButtonLink = "#"
}: CourseCTAProps) {
  return (
    <section className="w-full bg-[#0A1A44] py-16 md:py-24 px-4 flex justify-center items-center">
      <div className="max-w-[720px] w-full flex flex-col items-center text-center">
        <h2
          className="text-white text-[32px] md:text-[40px] lg:text-[46px] mb-5"
          style={{ fontFamily: 'var(--font-dm-serif)' }}
        >
          {title}
        </h2>

        <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed mb-10 max-w-[640px]">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
          <Link
            href={primaryButtonLink}
            className="bg-[#5698ED] hover:bg-[#4887D9] text-white font-medium text-[15px] px-8 py-3.5 transition-colors duration-300 text-center min-w-[200px]"
          >
            {primaryButtonText}
          </Link>

          <Link
            href={secondaryButtonLink}
            className="bg-transparent border border-white/60 hover:border-white hover:bg-white hover:text-[#0A1A44] text-white font-medium text-[15px] px-8 py-3.5 transition-colors duration-300 text-center min-w-[200px]"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
