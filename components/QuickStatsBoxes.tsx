import React from 'react';

export interface QuickStatsBox {
  value: string | number;
  label: string;
}

export interface QuickStatsBoxesProps {
  stats: [QuickStatsBox, QuickStatsBox, QuickStatsBox];
}

export default function QuickStatsBoxes({ stats }: QuickStatsBoxesProps) {
  return (
    <div className="flex flex-col md:flex-row w-full items-stretch gap-2">
      {/* Box 1 */}
      <div className="flex-1 flex flex-col bg-[#0B1F4A] justify-between min-h-[160px] p-6 md:p-8 text-left">
        <div className="text-[64px] md:text-[72px] text-[#4D97E6] leading-none mb-2" style={{ fontFamily: 'var(--font-dm-serif)' }}>
          {stats[0].value}
        </div>
        <div className="text-white text-[13px] md:text-[14px] mt-6 font-light">
          {stats[0].label}
        </div>
      </div>

      {/* Box 2 */}
      <div className="flex-1 flex flex-col bg-[#2B629E] justify-between min-h-[160px] p-6 md:p-8 text-left">
        <div className="text-[64px] md:text-[72px] text-white leading-none mb-2" style={{ fontFamily: 'var(--font-dm-serif)' }}>
          {stats[1].value}
        </div>
        <div className="text-white/90 text-[13px] md:text-[14px] mt-6 font-light">
          {stats[1].label}
        </div>
      </div>

      {/* Box 3 */}
      <div className="flex-1 flex flex-col bg-transparent border border-[#0B1F4A] justify-between min-h-[160px] p-6 md:p-8 text-left">
        <div className="text-[64px] md:text-[72px] text-[#0B1F4A] leading-none mb-2" style={{ fontFamily: 'var(--font-dm-serif)' }}>
          {stats[2].value}
        </div>
        <div className="text-[#0B1F4A] text-[13px] md:text-[14px] mt-6 font-light">
          {stats[2].label}
        </div>
      </div>
    </div>
  );
}
