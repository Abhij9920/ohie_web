import React from 'react';
import Link from 'next/link';

export interface EventCardProps {
  day: string;
  monthYear: string;
  title: string;
  dateRange: string;
  venue: string;
  href: string;
}

export default function EventCard({ day, monthYear, title, dateRange, venue, href }: EventCardProps) {
  return (
    <div className="w-full flex relative py-12 md:py-20 bg-[#2463A7] text-white min-h-[160px] shadow-sm">
      {/* Thick left border */}
      <div className="absolute left-0 top-0 bottom-0 w-[12px] md:w-[24px] bg-[#4D97E6]"></div>

      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-6 pl-10 md:px-[120px] gap-8">

        {/* Left Date Block */}
        <div className="flex flex-col justify-center pl-6 md:pl-8 border-l-4 border-[#4D97E6] shrink-0">
          <div className="text-[48px] md:text-[64px] leading-none font-[family-name:var(--font-dm-serif)]">
            {day}
          </div>
          <div className="text-[12px] md:text-[14px] tracking-[0.2em] uppercase mt-4 text-[#4D97E6] font-medium">
            {monthYear}
          </div>
        </div>

        {/* Middle Content Block */}
        <div className="flex flex-col">
          <h3 className="text-[24px] md:text-[32px] font-[family-name:var(--font-dm-serif)] mb-4 md:mb-5">
            {title}
          </h3>
          <div className="flex flex-col gap-3 text-[13px] md:text-[14px] text-white/90">
            {/* Date Details */}
            <div className="flex items-center gap-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <g clipPath="url(#clip0_6320_10444)">
                  <path d="M4.66667 1.16406V3.49758M9.33333 1.16406V3.49758M1.75 5.8311H12.25M2.91667 2.33082H11.0833C11.7277 2.33082 12.25 2.8532 12.25 3.49758V11.6649C12.25 12.3093 11.7277 12.8317 11.0833 12.8317H2.91667C2.27233 12.8317 1.75 12.3093 1.75 11.6649V3.49758C1.75 2.8532 2.27233 2.33082 2.91667 2.33082Z" stroke="#4D97E6" strokeWidth="2" strokeLinecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_6320_10444">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>{dateRange}</span>
            </div>
            {/* Venue Details */}
            <div className="flex items-center gap-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6320_10441)">
                  <path d="M7.35073 12.7145C8.43562 11.7776 11.6664 8.74401 11.6664 5.83116C11.6664 4.59337 11.1748 3.40627 10.2997 2.53102C9.4246 1.65577 8.23774 1.16406 7.00018 1.16406C5.76263 1.16406 4.57576 1.65577 3.70068 2.53102C2.8256 3.40627 2.33398 4.59337 2.33398 5.83116C2.33398 8.74401 5.56474 11.7776 6.64964 12.7145C6.7507 12.7906 6.87373 12.8317 7.00018 12.8317C7.12664 12.8317 7.24966 12.7906 7.35073 12.7145Z" stroke="#4D97E6" stroke-width="2" stroke-linecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_6320_10441">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>{venue}</span>
            </div>
          </div>
        </div>

        {/* Right Button */}
        <div className="mt-4 md:mt-0 shrink-0">
          <Link href={href} className="inline-flex items-center justify-center bg-[#4D97E6] hover:bg-[#3a7bc2] text-white px-8 py-3.5 text-[14px] font-medium transition-colors">
            Read More →
          </Link>
        </div>

      </div>
    </div>
  );
}
