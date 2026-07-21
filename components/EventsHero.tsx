import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Breadcrumb {
  label: string;
  href?: string;
}

export interface EventsHeroProps {
  breadcrumbs?: Breadcrumb[];
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  children?: React.ReactNode;
}

export default function EventsHero({
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'News & Events' },
    { label: 'Events' }
  ],
  title = "Upcoming Events",
  subtitle = "Stay connected with the latest happenings at OIHE",
  imageSrc = "/events/hero_right_image.png",
  children
}: EventsHeroProps) {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[400px]">
      {/* Left Column (Content) */}
      <div className="w-full lg:w-[60%] bg-[#0B1F4A] flex flex-col justify-center px-6 md:px-12 xl:px-[120px] py-[60px] md:py-[80px]">

        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] md:text-[12px] font-normal text-[#4D97E6]/70 tracking-wider mb-6 md:mb-10 uppercase">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#4D97E6] font-semibold">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-white text-[42px] md:text-[56px] lg:text-[64px] italic mb-6 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
          {title}
        </h1>

        {/* Subtitle / Children */}
        {subtitle && (
          <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-[500px]">
            {subtitle}
          </p>
        )}
        
        {children && (
          <div className="mt-2">
            {children}
          </div>
        )}

      </div>

      {/* Right Column (Image) */}
      <div className="w-full lg:w-[40%] relative min-h-[300px] lg:min-h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
