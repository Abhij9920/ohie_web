import React from 'react';
import Link from 'next/link';

export default function JoinTeamCTA() {
  return (
    <section className="w-full bg-[#0B1F4A] py-[80px] md:py-[120px] px-4 md:px-[40px] flex justify-center items-center">
      <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
        <h2 className="text-white text-[44px] font-serif italic mb-6 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
          Passionate About Education? Join Our Team.
        </h2>
        <p className="text-[#4D97E6] text-[16px]  leading-relaxed mb-[40px] max-w-[700px]">
          Join our diverse global community of thinkers, innovators and leaders. We are always looking for dedicated professionals to join our faculty and administrative teams.
        </p>
        <Link
          href="#"
          className="bg-white text-[#0B1F4A] px-8 py-4 text-[14px]  font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
        >
          View Opportunities
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
