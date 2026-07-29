import React from 'react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const HandshakeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.8329 19.8346L15.1664 22.1679C15.3962 22.3977 15.6691 22.58 15.9694 22.7044C16.2697 22.8288 16.5915 22.8928 16.9165 22.8928C17.2416 22.8928 17.5634 22.8288 17.8637 22.7044C18.164 22.58 18.4368 22.3977 18.6667 22.1679C18.8965 21.9381 19.0788 21.6653 19.2032 21.365C19.3276 21.0647 19.3916 20.7429 19.3916 20.4179C19.3916 20.0929 19.3276 19.7711 19.2032 19.4708C19.0788 19.1705 18.8965 18.8977 18.6667 18.6679M16.3334 16.334L19.2503 19.2507C19.7145 19.7148 20.344 19.9756 21.0005 19.9756C21.6569 19.9756 22.2864 19.7148 22.7506 19.2507C23.2148 18.7865 23.4755 18.157 23.4755 17.5007C23.4755 16.8443 23.2148 16.2148 22.7506 15.7507L18.2236 11.224C17.5673 10.5685 16.6776 10.2004 15.75 10.2004C14.8225 10.2004 13.9328 10.5685 13.2765 11.224L12.2498 12.2506C11.7856 12.7148 11.156 12.9755 10.4996 12.9755C9.84319 12.9755 9.21364 12.7148 8.74948 12.2506C8.28531 11.7865 8.02454 11.157 8.02454 10.5006C8.02454 9.84425 8.28531 9.21475 8.74948 8.75062L12.0281 5.47227C13.0924 4.41076 14.4805 3.73457 15.9725 3.55072C17.4645 3.36688 18.9752 3.68589 20.2654 4.45726L20.8138 4.78393C21.3106 5.08375 21.9013 5.18773 22.4706 5.0756L24.5007 4.66726M24.5005 3.50114L25.6672 16.3345H23.3337M3.49879 3.50114L2.33203 16.3345L9.91597 23.9179C10.3801 24.3821 11.0097 24.6428 11.6661 24.6428C12.3225 24.6428 12.9521 24.3821 13.4163 23.9179C13.8804 23.4538 14.1412 22.8243 14.1412 22.1679C14.1412 21.5115 13.8804 20.882 13.4163 20.4179M3.49879 4.66781H12.8329" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>

);

const valuesData: ValueCardProps[] = [
  {
    icon: <StarIcon />,
    title: "Excellence",
    description: "We strive for the highest quality in every aspect of our work."
  },
  {
    icon: <UsersIcon />,
    title: "Unity",
    description: "We work together to achieve our vision, mission and objectives."
  },
  {
    icon: <HeartIcon />,
    title: "Passion",
    description: "We are passionately committed to delivering quality educational experiences and expanding all learners' horizons."
  },
  {
    icon: <ShieldIcon />,
    title: "Integrity",
    description: "We act responsibly and honestly in all we do."
  },
  {
    icon: <GlobeIcon />,
    title: "Diversity",
    description: "We promote inter-cultural awareness and understanding through authentic experiences both within the Ozford community and the broader Australian and global community."
  },
  {
    icon: <HandshakeIcon />,
    title: "Respect",
    description: "We respect all our clients and stakeholders by providing a caring Ozford community based on openness, fairness and friendship. We recognise that with rights come responsibilities to ourselves, our clients and our stakeholders."
  }
];

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <div className="bg-[#FFFFFF15] border border-[#FFFFFF1F] p-6 md:p-8 hover:bg-white/10 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h4 className="text-white text-[20px] font-semibold">{title}</h4>
    </div>
    <p className="text-white/80 text-[14px] leading-[1.6]">
      {description}
    </p>
  </div>
);

export default function OurValues() {
  return (
    <section className="w-full bg-[#2463A7] py-[80px] md:py-[100px] lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
          <h2 className="text-white text-[36px] md:text-[48px] italic font-normal mb-4" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Our Values
          </h2>
          <div className="w-[60px] h-[3px] bg-[#4D97E6]"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {valuesData.map((data, idx) => (
            <ValueCard key={idx} {...data} />
          ))}
        </div>

      </div>
    </section>
  );
}
