import React from 'react';
import Link from 'next/link';
import PageHeader from './PageHeader';

export interface EventDetailProps {
  breadcrumbs: { label: string; href?: string }[];
  title: string;
  dateRange: string;
  time?: string;
  venue: string;
  heroImage: string;
  aboutTitle: string;
  content: React.ReactNode;
  eventDetails: {
    date: string;
    venue: string;
    websiteLabel?: string;
    websiteUrl?: string;
  };
}

export default function EventDetail({
  breadcrumbs,
  title,
  dateRange,
  time,
  venue,
  heroImage,
  aboutTitle,
  content,
  eventDetails,
}: EventDetailProps) {
  return (
    <div className="w-full bg-[#FAFAF7] min-h-screen">
      {/* Hero Section */}
      <PageHeader
        breadcrumbs={breadcrumbs.map(bc => ({ label: bc.label, href: bc.href || '#' }))}
        title={title}
        rightImage={heroImage}
        description={
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {/* Date Badge */}
            <div className="flex items-center gap-2 bg-[#2463A7] px-4 py-2.5 text-white text-[13px] md:text-[14px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-white/80">
                <path d="M4.66667 1.16406V3.49758M9.33333 1.16406V3.49758M1.75 5.8311H12.25M2.91667 2.33082H11.0833C11.7277 2.33082 12.25 2.8532 12.25 3.49758V11.6649C12.25 12.3093 11.7277 12.8317 11.0833 12.8317H2.91667C2.27233 12.8317 1.75 12.3093 1.75 11.6649V3.49758C1.75 2.8532 2.27233 2.33082 2.91667 2.33082Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>{dateRange}</span>
            </div>

            {/* Time Badge (Optional) */}
            {time && (
              <div className="flex items-center gap-2 bg-[#2463A7] px-4 py-2.5 text-white text-[13px] md:text-[14px]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/80">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{time}</span>
              </div>
            )}

            {/* Venue Badge */}
            <div className="flex items-center gap-2 bg-[#2463A7] px-4 py-2.5 text-white text-[13px] md:text-[14px]">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-white/80">
                <path d="M6.01675 12.5505C7.10164 11.6136 10.3324 8.57995 10.3324 5.6671C10.3324 4.42931 9.84078 3.24221 8.9657 2.36696C8.09062 1.49171 6.90375 1 5.6662 1C4.42865 1 3.24178 1.49171 2.3667 2.36696C1.49162 3.24221 1 4.42931 1 5.6671C1 8.57995 4.23076 11.6136 5.31565 12.5505C5.41672 12.6265 5.53975 12.6676 5.6662 12.6676C5.79265 12.6676 5.91568 12.6265 6.01675 12.5505Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>{venue}</span>
            </div>
          </div>
        }
      />

      {/* Main Content Area */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 xl:px-0">

          <div className="mb-4">
            <span className="text-[12px] font-semibold text-[#4D97E6] tracking-wider uppercase">
              About This Event
            </span>
          </div>

          <h2 className="text-[#0B1F4A] text-[32px] md:text-[38px] italic mb-6" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            {aboutTitle}
          </h2>

          {/* Dynamic Content */}
          <div className="event-content-wrapper text-[#3D3D3D]">
            <style>{`
              .event-content-wrapper {
                font-family: var(--font-plus-jakarta);
                font-size: 15px;
                line-height: 1.6;
              }
              .event-content-wrapper p {
                margin-top: 0;
                margin-bottom: 8px; /* Very tight spacing */
              }
              .event-content-wrapper p:last-child {
                margin-bottom: 0;
              }
              .event-content-wrapper strong {
                font-weight: 700;
                color: #3D3D3D;
              }
              .event-content-wrapper ul {
                list-style-type: none;
                padding-left: 0;
                margin-top: 8px;
                margin-bottom: 16px;
              }
              .event-content-wrapper li {
                position: relative;
                padding-left: 20px;
                margin-bottom: 4px;
              }
              .event-content-wrapper li:last-child {
                margin-bottom: 0;
              }
              .event-content-wrapper li::before {
                content: '';
                position: absolute;
                left: 0;
                top: 9px;
                width: 5px;
                height: 5px;
                background-color: #4D97E6;
                border-radius: 50%;
              }
            `}</style>
            {content}
          </div>

          {/* Event Details Card */}
          <div className="mt-16 bg-[#0B1F4A] text-white p-6 md:p-8 border-t-[5px] border-[#4D97E6]">
            <h3 className="text-[24px] md:text-[28px] italic mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4D97E6]">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Event Details
            </h3>

            <div className="flex flex-col gap-4 text-[14px] md:text-[15px] text-white/80">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#4D97E6] mt-0.5">
                  <path d="M4.66667 1.16406V3.49758M9.33333 1.16406V3.49758M1.75 5.8311H12.25M2.91667 2.33082H11.0833C11.7277 2.33082 12.25 2.8532 12.25 3.49758V11.6649C12.25 12.3093 11.7277 12.8317 11.0833 12.8317H2.91667C2.27233 12.8317 1.75 12.3093 1.75 11.6649V3.49758C1.75 2.8532 2.27233 2.33082 2.91667 2.33082Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span><strong className="text-white font-semibold">Date:</strong> {eventDetails.date}</span>
              </div>

              <div className="flex items-start gap-3">
                <svg width="16" height="18" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#4D97E6] mt-0.5">
                  <path d="M6.01675 12.5505C7.10164 11.6136 10.3324 8.57995 10.3324 5.6671C10.3324 4.42931 9.84078 3.24221 8.9657 2.36696C8.09062 1.49171 6.90375 1 5.6662 1C4.42865 1 3.24178 1.49171 2.3667 2.36696C1.49162 3.24221 1 4.42931 1 5.6671C1 8.57995 4.23076 11.6136 5.31565 12.5505C5.41672 12.6265 5.53975 12.6676 5.6662 12.6676C5.79265 12.6676 5.91568 12.6265 6.01675 12.5505Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span><strong className="text-white font-semibold">Venue:</strong> {eventDetails.venue}</span>
              </div>

              {eventDetails.websiteUrl && eventDetails.websiteLabel && (
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#4D97E6] mt-0.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>
                    <strong className="text-white font-semibold">Website:</strong>{' '}
                    <a href={eventDetails.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-[#4D97E6] underline decoration-[#4D97E6]/60 underline-offset-4 hover:decoration-[#4D97E6]">
                      {eventDetails.websiteLabel}
                    </a>
                  </span>
                </div>
              )}
            </div>

            <div className="mt-8">
              <p className="italic text-[16px] text-white" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                We look forward to meeting you at the event!
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
