import React from 'react';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  breadcrumbs: Breadcrumb[];
  title: React.ReactNode;
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
      <section className="relative w-full min-h-[300px] lg:min-h-[400px] flex">
        {/* Background split for full bleed */}
        <div className="absolute inset-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-[60%] h-full bg-[#0B1F4A]"></div>
          <div className="w-full lg:w-[40%] h-full relative hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={rightImage}
              alt={typeof title === 'string' ? title : "Page Header Image"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Foreground Content Container - Aligned with the rest of the site */}
        <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] flex flex-col lg:flex-row">
          
          {/* Left Column (Content) */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center py-[60px] md:py-[80px] lg:pr-[40px] xl:pr-[80px]">
            {renderContent()}
          </div>

          {/* Mobile Image (Visible only on small screens below content) */}
          <div className="w-full h-[300px] relative lg:hidden mt-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={rightImage}
              alt={typeof title === 'string' ? title : "Page Header Image"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </section>
    );
  }

  // Standard PageHeader layout
  return (
    <div className="w-full bg-[#0B1F4A] pt-[60px] pb-[80px] md:pt-[80px] md:pb-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Left Side: Breadcrumbs and Title */}
        <div className="flex-1 max-w-[800px]">
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
