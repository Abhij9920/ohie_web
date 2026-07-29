import React from 'react';
import Link from 'next/link';

export interface EventCardTypeBProps {
  day: string;
  month: string;
  metaText: string;
  title: string;
  href?: string;
}

export default function EventCardTypeB({
  day,
  month,
  metaText,
  title,
  href = "#"
}: EventCardTypeBProps) {
  return (
    <div className="w-full bg-white flex flex-col sm:flex-row border border-[#E0D9C8] h-full min-h-[160px] md:min-h-[180px] transition-transform hover:-translate-y-1 duration-300">
      {/* Dark Date Block */}
      <div className="w-full sm:w-[100px] md:w-[130px] bg-[#0B1F4A] flex flex-row sm:flex-col justify-center items-center shrink-0 py-4 sm:py-0 gap-3 sm:gap-0">
        <span className="text-[36px] md:text-[48px] text-white leading-none font-[family-name:var(--font-dm-serif)]">{day}</span>
        <span className="text-[10px] md:text-[11px] text-[#4D97E6] font-bold uppercase tracking-widest sm:mt-2">{month}</span>
      </div>

      {/* Right Content Column */}
      <div className="p-5 md:p-8 flex flex-col flex-1 justify-center">
        <div className="text-[11px] md:text-[12px] text-[#605C54] mb-2 md:mb-3 font-medium">
          {metaText}
        </div>
        <h3 className="text-[#0B1F4A] font-semibold text-[15px] md:text-[16px] leading-[100%] mb-3 max-w-[400px]">
          {title}
        </h3>
        <Link href={href} className="text-[#4D97E6] text-[13px] font-medium hover:underline inline-flex items-center gap-1 mt-1">
          Read more <span className="text-[16px] leading-none">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
