import React from 'react';
import PageHeader from './PageHeader';

export default function PreEnrolmentVideoContent() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '#' },
          { label: 'Pre-Enrolment', href: '/admission-entry/pre-enrolment' },
          { label: 'Video Guide', href: '#' }
        ]}
        title="Welcome to Ozford Institute of Higher Education"
        hideUnderline={true}
      />

      <section className="w-full bg-white py-12 md:py-20 min-h-[50vh]">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] flex justify-center">
          <div className="w-full max-w-[1000px] bg-black shadow-xl rounded-md overflow-hidden">
            <video 
              controls 
              className="w-full h-auto aspect-[16/7] md:aspect-video"
              poster="https://d1ka0itfguscri.cloudfront.net/phK7/2025/07/25/07/47/cTiTiHnIFDF/preview.jpg"
              preload="none"
              playsInline
            >
              <source src="https://go.screenpal.com/player/stream/cTiTiHnIFDF" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
