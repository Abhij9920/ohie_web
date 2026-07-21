import React from 'react';
import Link from 'next/link';

export interface EventCardTypeCProps {
  day: string;
  month: string;
  dateStr: string;
  timeStr?: string;
  locationStr?: string;
  title: string;
  href?: string;
}

export default function EventCardTypeC({
  day,
  month,
  dateStr,
  timeStr,
  locationStr,
  title,
  href = "#"
}: EventCardTypeCProps) {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row border border-[#E0D9C8] rounded-xl overflow-hidden h-full min-h-[140px] transition-transform hover:-translate-y-1 duration-300">
      {/* Left Dark Column */}
      <div className="w-full md:w-[180px] bg-[#24355A] flex flex-col justify-center items-center shrink-0 py-6 md:py-0">
        <span className="text-[42px] md:text-[54px] text-white leading-none font-bold tracking-tight">{day}</span>
        <span className="text-[14px] md:text-[16px] text-white mt-1">{month}</span>
      </div>

      {/* Right Content Column */}
      <div className="p-5 md:p-6 lg:p-8 flex flex-col flex-1 justify-center">
        <div className="flex flex-wrap items-start gap-y-2 gap-x-6 text-[11px] md:text-[12px] text-gray-500 mb-3 md:mb-4 font-medium">
          {/* Date */}
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-gray-400">
              <path d="M4.66667 1.16406V3.49758M9.33333 1.16406V3.49758M1.75 5.8311H12.25M2.91667 2.33082H11.0833C11.7277 2.33082 12.25 2.8532 12.25 3.49758V11.6649C12.25 12.3093 11.7277 12.8317 11.0833 12.8317H2.91667C2.27233 12.8317 1.75 12.3093 1.75 11.6649V3.49758C1.75 2.8532 2.27233 2.33082 2.91667 2.33082Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>{dateStr}</span>
          </div>
          
          {/* Time */}
          {timeStr && (
            <div className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gray-400">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{timeStr}</span>
            </div>
          )}

          {/* Location */}
          {locationStr && (
            <div className="flex items-start gap-1.5 max-w-[400px]">
              <svg width="10" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-gray-400 mt-[2px]">
                <path d="M6.01675 12.5505C7.10164 11.6136 10.3324 8.57995 10.3324 5.6671C10.3324 4.42931 9.84078 3.24221 8.9657 2.36696C8.09062 1.49171 6.90375 1 5.6662 1C4.42865 1 3.24178 1.49171 2.3667 2.36696C1.49162 3.24221 1 4.42931 1 5.6671C1 8.57995 4.23076 11.6136 5.31565 12.5505C5.41672 12.6265 5.53975 12.6676 5.6662 12.6676C5.79265 12.6676 5.91568 12.6265 6.01675 12.5505Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>{locationStr}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-[#0B1F4A] font-bold text-[16px] md:text-[18px] leading-snug mb-3">
          {title}
        </h3>
        
        <Link href={href} className="text-[#0B1F4A] text-[12px] font-medium hover:underline inline-flex items-center gap-1 mt-auto">
          Read more <span className="text-[14px] leading-none">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
