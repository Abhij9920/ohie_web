import React from 'react';
import Link from 'next/link';

const InfoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2463A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const MapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 3.23438C8.68967 3.23438 8.3836 3.30659 8.106 3.44531L3.553 5.72231C3.38692 5.8053 3.24722 5.93289 3.14956 6.09078C3.05189 6.24868 3.0001 6.43065 3 6.61631V19.3793C2.99958 19.55 3.04284 19.7179 3.12565 19.8671C3.20846 20.0163 3.32808 20.1418 3.47312 20.2317C3.61816 20.3216 3.78379 20.3729 3.95426 20.3807C4.12473 20.3885 4.29436 20.3526 4.447 20.2763L8.106 18.4463C8.3836 18.3076 8.68967 18.2354 9 18.2354C9.31033 18.2354 9.6164 18.3076 9.894 18.4463L14.106 20.5523C14.3836 20.691 14.6897 20.7632 15 20.7632C15.3103 20.7632 15.6164 20.691 15.894 20.5523L20.447 18.2753C20.6131 18.1923 20.7528 18.0647 20.8505 17.9068C20.9481 17.7489 20.9999 17.567 21 17.3813V4.61731C21.0003 4.44675 20.9569 4.27896 20.874 4.12989C20.7911 3.98082 20.6715 3.85543 20.5265 3.76564C20.3814 3.67585 20.2159 3.62463 20.0455 3.61688C19.8751 3.60912 19.7056 3.64507 19.553 3.72131L15.894 5.55131C15.6164 5.69002 15.3103 5.76224 15 5.76224C14.6897 5.76224 14.3836 5.69002 14.106 5.55131L9.894 3.44531C9.6164 3.30659 9.31033 3.23438 9 3.23438ZM15 5.76224L15 20.7617M9 3.23438L9 18.2344" stroke="#2463A7" strokeWidth="2" strokeLinecap="round" />
  </svg>

);

const BusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.001 17.9986V5.9998C14.001 5.46942 13.7902 4.96076 13.4151 4.58573C13.04 4.21069 12.5313 4 12.0008 4H4.00016C3.46968 4 2.96094 4.21069 2.58583 4.58573C2.21073 4.96076 2 5.46942 2 5.9998V16.9987C2 17.2639 2.10537 17.5182 2.29292 17.7057C2.48047 17.8933 2.73484 17.9986 3.00008 17.9986H5.00024M5.00024 17.9986C5.00024 19.1031 5.89574 19.9984 7.0004 19.9984C8.10506 19.9984 9.00056 19.1031 9.00056 17.9986M5.00024 17.9986C5.00024 16.8941 5.89574 15.9988 7.0004 15.9988C8.10506 15.9988 9.00056 16.8941 9.00056 17.9986M9.00056 17.9986H15.001M15.001 17.9986C15.001 19.1031 15.8965 19.9984 17.0012 19.9984C18.1059 19.9984 19.0014 19.1031 19.0014 17.9986M15.001 17.9986C15.001 16.8941 15.8965 15.9988 17.0012 15.9988C18.1059 15.9988 19.0014 16.8941 19.0014 17.9986M19.0014 17.9986H21.0015C21.2668 17.9986 21.5211 17.8933 21.7087 17.7057C21.8962 17.5182 22.0016 17.2639 22.0016 16.9987V13.3491C22.0012 13.1222 21.9236 12.9021 21.7816 12.7251L18.3013 8.37556C18.2078 8.25845 18.0891 8.16386 17.9541 8.09879C17.8191 8.03371 17.6711 7.99981 17.5212 7.9996H14.001" stroke="#2463A7" strokeWidth="2" strokeLinecap="round" />
  </svg>

);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2463A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function UsefulLinks() {
  const links = [
    {
      icon: <InfoIcon />,
      title: "Study in Melbourne",
      desc: "Official guide to living and studying in Victoria",
      href: "#"
    },
    {
      icon: <MapIcon />,
      title: "Visit Melbourne",
      desc: "Explore sights, culture, events, and destinations",
      href: "#"
    },
    {
      icon: <BusIcon />,
      title: "Public Transport Victoria",
      desc: "Plan routes, view timetables, and ticketing details",
      href: "#"
    }
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px]">
        <div className="mb-8 md:mb-12">
          <span className="text-[#2463A7] text-[12px] md:text-[14px] font-bold tracking-wider uppercase mb-3 block">
            Student Resources
          </span>
          <h2 className="text-[#0B1F4A] text-[32px] md:text-[38px] lg:text-[44px] mb-6 md:mb-8 leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Useful Links & Portals
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {links.map((link, idx) => (
            <Link key={idx} href={link.href} className="flex items-center p-4 xl:p-6 border border-[#E5E5E0] hover:shadow-md transition-all group bg-white min-h-[140px] xl:min-h-[160px]">

              {/* Icon Box */}
              <div className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] bg-[#2463A71A] flex items-center justify-center shrink-0 mr-4 xl:mr-6">
                {link.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0 pr-2">
                <h3 className="text-[#0B1F4A] text-[18px] md:text-[22px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] font-normal mb-1 md:mb-2 leading-tight whitespace-nowrap" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                  {link.title}
                </h3>
                <p className="text-[#6B7280] text-[13px] leading-relaxed">
                  {link.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="shrink-0 transform group-hover:translate-x-1 transition-transform ml-2">
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
