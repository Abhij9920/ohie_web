import React from 'react';

interface BoardSectionProps {
  smallTitle: string;
  mainTitle: string;
  theme?: 'light' | 'dark' | 'gray';
  children: React.ReactNode;
}

export default function BoardSection({ smallTitle, mainTitle, theme = 'light', children }: BoardSectionProps) {
  let bgColorClass = 'bg-[#FAFAF7]';
  if (theme === 'dark') bgColorClass = 'bg-[#0B1F4A]';
  if (theme === 'gray') bgColorClass = 'bg-[#FAFAF7]';

  const isDark = theme === 'dark';

  return (
    <section className={`w-full ${bgColorClass} py-16 md:py-24 `}>
      <div className="max-w-[1440px] mx-auto px-4 xl:px-[100px]">

        {/* Section Headings */}
        <div className="mb-12">
          <h4 className={`text-[11px]  font-semibold uppercase tracking-wider mb-2 text-[#4D97E6]`}>
            {smallTitle}
          </h4>
          <h2 className={`text-[28px] md:text-[36px] font-serif mb-4 ${isDark ? 'text-white' : 'text-[#0B1F4A]'}`} style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '1.2' }}>
            {mainTitle}
          </h2>
          {/* Short blue underline */}
          <div className="w-[40px] md:w-[60px] h-[3px] bg-[#4D97E6]"></div>
        </div>

        {/* Content (Grid of Profile Cards) */}
        <div className="w-full">
          {children}
        </div>

      </div>
    </section>
  );
}
