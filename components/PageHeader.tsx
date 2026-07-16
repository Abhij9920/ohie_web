import React from 'react';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  breadcrumbs: Breadcrumb[];
  title: string;
  quote?: React.ReactNode;
}

export default function PageHeader({ breadcrumbs, title, quote }: PageHeaderProps) {
  return (
    <div className="w-full bg-[#0B1F4A] pt-[60px] pb-[80px] md:pt-[80px] md:pb-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 xl:px-[100px] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Left Side: Breadcrumbs and Title */}
        <div className="flex-1">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[12px] font-normal text-[#4D97E6]/70 capitalize tracking-wider mb-6">
            {breadcrumbs.map((bc, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && <span>/</span>}
                  {isLast ? (
                    <span className="text-[#4D97E6] font-semibold">{bc.label}</span>
                  ) : (
                    <Link href={bc.href} className="hover:text-white transition-colors">
                      {bc.label}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Title */}
          <h1 className="text-white text-[48px] md:text-[60px]  italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            {title}
          </h1>
          {/* Blue underline */}
          <div className="w-[80px] md:w-[120px] h-[3px] bg-[#4D97E6] mt-4"></div>
        </div>

        {/* Right Side: Quote */}
        {quote && (
          <div className="flex-1 max-w-[450px]">
            <p className="text-[#4D97E6] text-[20px]   italic leading-relaxed" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              "{quote}"
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
