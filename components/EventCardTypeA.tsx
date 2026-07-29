import React from 'react';
import Link from 'next/link';

export interface EventCardTypeAProps {
  dateInfo: string;
  timeOrLocationInfo: string;
  timeOrLocationIcon: 'time' | 'location';
  title: string;
  day: string;
  month: string;
  href?: string;
}

export default function EventCardTypeA({
  dateInfo,
  timeOrLocationInfo,
  timeOrLocationIcon,
  title,
  day,
  month,
  href = "#"
}: EventCardTypeAProps) {
  return (
    <div className="w-full bg-white flex flex-col border border-[#E0D9C8] border-t-[4px] border-t-[#4D97E6] h-full min-h-[300px] md:min-h-[340px] transition-transform hover:-translate-y-1 duration-300">
      {/* Header */}
      <div className="bg-[#0B1F4A] text-white px-4 py-3 flex justify-between items-center text-[10px] sm:text-[11px] font-medium shrink-0">
        <div className="flex items-center gap-1.5 opacity-90 truncate pr-2">
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#4D97E6]">
            <g clipPath="url(#clip0_cal)">
              <path d="M4.66667 1.16406V3.49758M9.33333 1.16406V3.49758M1.75 5.8311H12.25M2.91667 2.33082H11.0833C11.7277 2.33082 12.25 2.8532 12.25 3.49758V11.6649C12.25 12.3093 11.7277 12.8317 11.0833 12.8317H2.91667C2.27233 12.8317 1.75 12.3093 1.75 11.6649V3.49758C1.75 2.8532 2.27233 2.33082 2.91667 2.33082Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            <defs>
              <clipPath id="clip0_cal">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="truncate">{dateInfo}</span>
        </div>
        <div className="flex items-center gap-1.5 opacity-90 shrink-0">
          {timeOrLocationIcon === 'time' ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4D97E6]">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#4D97E6]">
              <path d="M6.01675 12.5505C7.10164 11.6136 10.3324 8.57995 10.3324 5.6671C10.3324 4.42931 9.84078 3.24221 8.9657 2.36696C8.09062 1.49171 6.90375 1 5.6662 1C4.42865 1 3.24178 1.49171 2.3667 2.36696C1.49162 3.24221 1 4.42931 1 5.6671C1 8.57995 4.23076 11.6136 5.31565 12.5505C5.41672 12.6265 5.53975 12.6676 5.6662 12.6676C5.79265 12.6676 5.91568 12.6265 6.01675 12.5505Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
          <span>{timeOrLocationInfo}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h3 className="text-[#0B1F4A] font-semibold text-[15px] md:text-[16px] leading-snug mb-3">
          {title}
        </h3>
        
        <Link href={href} className="text-[#4D97E6] text-[13px] font-medium hover:underline inline-flex items-center gap-1 mb-4">
          Read more <span className="text-[16px] leading-none">&rarr;</span>
        </Link>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-1.5 text-[#4D97E6]">
            <span className="text-[36px] md:text-[42px] leading-none font-[family-name:var(--font-dm-serif)]">{day}</span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{month}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
