import React from 'react';
import Link from 'next/link';

const infoLinks = [
  { label: 'How to Apply', href: '#' },
  { label: 'Authorized Agents', href: '#' },
  { label: 'Intakes & Trimester Dates', href: '#' },
  { label: 'Fees & Scholarships', href: '#' },
  { label: 'Pathways', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Policies & Procedures', href: '#' },
  { label: 'FAQ\'s', href: '#' },
];

export default function StudentInformationSection() {
  return (
    <section className="w-full bg-[#0A1A44] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] flex flex-col lg:flex-row items-start lg:items-center">
        {/* Title Section */}
        <div className="w-full lg:w-[35%] mb-12 lg:mb-0">
          <h2 className="text-white text-[32px] md:text-[40px] font-bold tracking-tight">
            Student Information
          </h2>
        </div>
        
        {/* Links Grid */}
        <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
          {infoLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className="group flex items-center text-white/90 hover:text-white transition-colors text-[14px] md:text-[15px]"
            >
              {link.label}
              <svg 
                className="w-4 h-4 ml-1.5 opacity-80 group-hover:opacity-100 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
