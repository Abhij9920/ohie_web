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
  description?: React.ReactNode;
  rightImage?: string;
  hideUnderline?: boolean;
}

export default function PageHeader({ breadcrumbs, title, quote, description, rightImage, hideUnderline }: PageHeaderProps) {

  // Left side content rendering (reused in both layouts)
  const renderContent = () => (
    <>
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 text-[12px] font-normal text-[#4D97E6]/70 capitalize tracking-wider mb-6">
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
      <h1 className="text-white text-[48px] md:text-[48px] italic" style={{ fontFamily: 'var(--font-dm-serif)' }}>
        {title}
      </h1>

      {/* Blue underline */}
      {!hideUnderline && <div className="w-[80px] md:w-[120px] h-[3px] bg-[#4D97E6] mt-4 mb-6"></div>}

      {/* Description */}
      {description && (
        <div className="text-[#FFFFFF]/70 text-[15px] md:text-[16px] leading-relaxed max-w-[600px]">
          {description}
        </div>
      )}
    </>
  );

  // If rightImage is provided, use the split full-bleed layout
  if (rightImage) {
    return (
      <section className="w-full flex flex-col lg:flex-row min-h-[400px]">
        {/* Left Column (Content) */}
        <div className="w-full lg:w-[60%] bg-[#0B1F4A] flex flex-col justify-center px-6 md:px-12 xl:px-[120px] py-[60px] md:py-[80px]">
          {renderContent()}
        </div>

        {/* Right Column (Image) */}
        <div className="w-full lg:w-[40%] relative min-h-[300px] lg:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={rightImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>
    );
  }

  // Standard PageHeader layout
  return (
    <div className="w-full bg-[#0B1F4A] pt-[60px] pb-[80px] md:pt-[80px] md:pb-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Left Side: Breadcrumbs and Title */}
        <div className="flex-1">
          {renderContent()}
        </div>

        {/* Right Side: Quote */}
        {quote && (
          <div className="flex-1 max-w-[450px]">
            <p className="text-[#4D97E6] text-[20px] italic leading-relaxed" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              "{quote}"
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
