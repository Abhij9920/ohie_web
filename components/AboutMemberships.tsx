import React from 'react';

const RibbonIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" fill="#2463A7" fillOpacity="0.0823529" />
    <path d="M23.4772 20.8896L24.9922 29.4156C25.0092 29.516 24.9951 29.6192 24.9519 29.7114C24.9086 29.8036 24.8382 29.8803 24.7502 29.9314C24.6621 29.9825 24.5605 30.0055 24.459 29.9974C24.3576 29.9892 24.261 29.9502 24.1822 29.8856L20.6022 27.1986C20.4294 27.0695 20.2195 26.9998 20.0037 26.9998C19.788 26.9998 19.5781 27.0695 19.4052 27.1986L15.8192 29.8846C15.7406 29.9491 15.6441 29.988 15.5427 29.9962C15.4414 30.0044 15.3399 29.9815 15.2519 29.9305C15.1639 29.8796 15.0935 29.803 15.0502 29.711C15.0068 29.619 14.9925 29.516 15.0092 29.4156L16.5232 20.8896M26 16C26 19.3137 23.3137 22 20 22C16.6863 22 14 19.3137 14 16C14 12.6863 16.6863 10 20 10C23.3137 10 26 12.6863 26 16Z" stroke="#2463A7" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" fill="#2463A7" fillOpacity="0.0823529" />
    <path d="M20.3392 29.9511C24.4987 28.5011 27.9984 26.001 27.9984 21.0008V14.0006C27.9984 13.7354 27.8931 13.481 27.7055 13.2934C27.518 13.1059 27.2637 13.0005 26.9985 13.0005C24.9987 13.0005 22.5089 11.8105 20.7591 10.2805C20.5473 10.0995 20.2778 10 19.9992 10C19.7206 10 19.4511 10.0995 19.2393 10.2805C17.4994 11.8005 14.9997 13.0005 12.9999 13.0005C12.7347 13.0005 12.4804 13.1059 12.2929 13.2934C12.1053 13.481 12 13.7354 12 14.0006V21.0008C12 26.001 15.4997 28.5011 19.6692 29.9411C19.8847 30.0214 20.1214 30.0249 20.3392 29.9511Z" stroke="#2463A7" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

interface MembershipCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const MembershipCard = ({ icon, title, subtitle, description }: MembershipCardProps) => (
  <div className="bg-white border border-[#E2E5E0] p-6 md:p-8 lg:p-[40px]">
    <div className="mb-8">
      {icon}
    </div>
    <h3 className="text-[#0B1F4A] text-[22px] md:text-[24px] font-normal mb-2" style={{ fontFamily: 'var(--font-dm-serif)' }}>
      {title}
    </h3>
    <p className="text-[#2463A7] text-[13px] md:text-[14px] mb-6">
      {subtitle}
    </p>
    <p className="text-[#1C1F1D] text-[14px] leading-[1.7]">
      {description}
    </p>
  </div>
);

export default function AboutMemberships() {
  const cardsData: MembershipCardProps[] = [
    {
      icon: <RibbonIcon />,
      title: "OIHE Memberships",
      subtitle: "Professional Associations & Curriculum Standards",
      description: "We are accredited by major professional bodies including CPA Australia and Chartered Accountants Australia. We maintain memberships of leading subject associations across our curriculum to ensure high educational standards."
    },
    {
      icon: <ShieldIcon />,
      title: "Registrations & Accreditations",
      subtitle: "TEQSA Registered Provider",
      description: "Ozford Institute of Higher Education is registered as a Higher Education Provider with the Tertiary Education Quality and Standards Agency (TEQSA), Australia's independent national quality assurance and regulatory agency for higher education."
    }
  ];

  return (
    <section className="w-full bg-[#FAFAF7] py-[60px] md:py-[100px] lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px]">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <h3 className="text-[#2463A7] text-[14px] font-bold leading-tight uppercase mb-4">
            QUALITY & RECOGNITION
          </h3>
          <h2 className="text-[#0B1F4A] text-[36px] md:text-[40px] font-normal leading-[1.2]" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Memberships & Accreditations
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {cardsData.map((card, index) => (
            <MembershipCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
