import React from 'react';

const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2463A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const RibbonIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2463A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const BookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2463A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2463A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2463A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default function WhyChooseAustralia() {
  const cards = [
    {
      icon: <GlobeIcon />,
      title: "3rd Highest",
      desc: "Int. students globally behind UK & US"
    },
    {
      icon: <RibbonIcon />,
      title: "7 of Top 100",
      desc: "Universities in global rankings"
    },
    {
      icon: <BookIcon />,
      title: "22,000+\nCourses",
      desc: "Across 1,100 institutions"
    },
    {
      icon: <TrendingUpIcon />,
      title: "Top 10",
      desc: "In the prestigious U21 ranking system"
    },
    {
      icon: <MapPinIcon />,
      title: "5 of 30",
      desc: "Best student cities in the world"
    }
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px]">
        <div className="mb-8 md:mb-12">
          <span className="text-[#2463A7] text-[12px] md:text-[14px] font-bold tracking-wider uppercase mb-3 block">
            Global Destination
          </span>
          <h2 className="text-[#0B1F4A] text-[32px] md:text-[38px] lg:text-[44px] leading-tight" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Why Choose Australia?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-[#E5E5E0] p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                {card.icon}
              </div>
              <h3 className="text-[#0B1F4A] text-[24px] md:text-[32px] font-normal mb-3 leading-tight whitespace-pre-line" style={{ fontFamily: 'var(--font-dm-serif)' }}>
                {card.title}
              </h3>
              <p className="text-[#555555] text-[13px] md:text-[14px] font-semibold leading-relaxed mt-auto">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-[#555555] text-[14px] md:text-[15px] lg:text-[16px] mt-10 md:mt-16 lg:mt-20 leading-relaxed max-w-[1200px]">
          <p>
            Australia's educational reputation is built upon solid foundational academic credentials, exceptional affordability, a brilliant overall quality of life, and highly vibrant employer activity. Students graduate with globally recognized qualifications that open doors immediately upon transition to the workforce.
          </p>
        </div>
      </div>
    </section>
  );
}
